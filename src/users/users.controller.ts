import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from '../models/IUser';

@Controller(  )
export class UsersController {
  constructor( private usersService: UsersService ) {}

  @Get()
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
    console.log( user );
    return this.usersService.updateUser( +id, user );
  }

  @Get( 'userstotal' )
  getTotal(): { total: number } {
    console.log( this.usersService.getTotal() );
    return this.usersService.getTotal()
  }
}
