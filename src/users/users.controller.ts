import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from '../models/IUser';

@Controller( 'api' )
export class UsersController {
  constructor( private usersService: UsersService ) {}

  @Get('users')
  getUsers(): IUser[] {
    return this.usersService.getUsers();
  }

  @Get( 'users/:id' )
  getUser( @Param( 'id' ) id: string ): IUser {
    return this.usersService.getUser( +id );
  }

  @Post('users')
  addUser( @Body() user: IUser ) {
    return this.usersService.addUser( user );
  }

  @Put( 'users/:id' )
  updateUser( @Param( 'id' ) id: string, @Body() user: IUser ): IUser {
    return this.usersService.updateUser( +id, user );
  }

  @Get( 'userstotal' )
  getTotal(): { total: number } {
    return this.usersService.getTotal()
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: string ): IUser[] {
    return this.usersService.deleteUser(+id)
  }

  @Post('search')
  search( @Body() search: { search: string } ): IUser[] {
    return this.usersService.search( search );
  }
}
