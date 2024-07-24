import { Field, InputType } from "@nestjs/graphql"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"

@InputType()
export class SignupInput {
  @IsEmail()
  @Field({ nullable: false })
  email: string

  @IsNotEmpty()
  @MinLength(4)
  @Field({ nullable: false })
  password: string
}
