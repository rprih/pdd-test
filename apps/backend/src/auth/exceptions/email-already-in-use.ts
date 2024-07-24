import { HttpException, HttpStatus } from "@nestjs/common"

export class EmailAlreadyInUse extends HttpException {
  constructor() {
    super("Email is already in use.", HttpStatus.CONFLICT)
  }
}
