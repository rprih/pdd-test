import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { hash, verify } from "argon2"
import { PrismaService } from "nestjs-prisma"
import { UserNotFound } from "./exceptions/user-not-found"
import { TokenPayload } from "./token-payload.types"
import { Prisma } from "@prisma/client"
import { PrismaError } from "prisma-error-enum"
import { EmailAlreadyInUse } from "./exceptions/email-already-in-use"

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signin(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } })

    if (!user) {
      throw new UserNotFound()
    }

    const isPasswordValid = await verify(user.password, password)
    if (!isPasswordValid) {
      throw new UserNotFound()
    }

    const payload: TokenPayload = { sub: user.id }
    const token = this.jwtService.sign(payload)

    return {
      user,
      token,
    }
  }

  async signup(email: string, password: string) {
    let user: Prisma.UserGetPayload<undefined>

    try {
      user = await this.prisma.user.create({
        data: {
          email,
          password: await hash(password),
        },
      })
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === PrismaError.UniqueConstraintViolation
      ) {
        throw new EmailAlreadyInUse()
      }
      throw new HttpException("Unknown error", HttpStatus.INTERNAL_SERVER_ERROR)
    }

    const payload: TokenPayload = { sub: user.id }
    const token = this.jwtService.sign(payload)

    return {
      user,
      token,
    }
  }

  validateUser(userId: string) {
    return this.prisma.user.findUnique({ where: { id: userId } })
  }
}
