import { Controller, Get } from '@nestjs/common';
import { Customer } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): Promise<Customer[]> {
    return this.userService.find();
  }
}
