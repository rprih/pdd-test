import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class User {
  @Field(() => String)
  id: string

  @Field(() => String)
  email: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
