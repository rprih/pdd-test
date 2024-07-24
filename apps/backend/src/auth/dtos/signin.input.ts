import { Field, InputType } from "@nestjs/graphql"
import { IsEmail } from "class-validator"

@InputType()
export class SigninInput {
  @IsEmail()
  @Field({ nullable: false })
  email: string

  @Field({ nullable: false })
  password: string
}
