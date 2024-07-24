import { Injectable } from "@nestjs/common"
import { PrismaService } from "nestjs-prisma"

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }
}
