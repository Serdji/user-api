import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from "./users.service";
import { IUser } from "../models/IUser";

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService ) {}

  @Get()
  getUsers(): IUser[] {
    return this.usersService.getUsers()
  }

  @Get(':id')
  getUser( @Param('id') id: string ): IUser {
    return this.usersService.getUser( +id )
  }

}

