import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from '../models/IUser';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): IUser[] {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): IUser {
    return this.usersService.getUser(+id);
  }

  @Post()
  addUser(@Body() user: IUser) {
    return this.usersService.addUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: IUser) {
    console.log(user);
    return this.usersService.updateUser(+id, user);
  }
}
