import { Field, ObjectType } from "@nestjs/graphql"
import { User } from "../../user/entities/user.entity"

@ObjectType()
export class SigninSignupOutput {
  @Field()
  user: User

  @Field()
  token: string
}
