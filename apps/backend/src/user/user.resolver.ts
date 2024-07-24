import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import { UserService } from "./user.service"
import { User } from "./entities/user.entity"

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // TODO: Restrict later.
  @Query(() => [User], { name: "users" })
  findAll() {
    return this.userService.findAll()
  }
}
