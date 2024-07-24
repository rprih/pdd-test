import { Args, Mutation, Resolver } from "@nestjs/graphql"
import { SigninSignupOutput } from "./dtos/signin-signup.output"
import { SignupInput } from "./dtos/signup.input"
import { AuthService } from "./auth.service"
import { SigninInput } from "./dtos/signin.input"

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SigninSignupOutput)
  signup(@Args("input") input: SignupInput) {
    return this.authService.signup(input.email, input.password)
  }

  @Mutation(() => SigninSignupOutput)
  signin(@Args("input") input: SigninInput) {
    return this.authService.signin(input.email, input.password)
  }
}
