import { Injectable } from '@nestjs/common';
import { IUser } from '../models/IUser';
import { users } from './users';
import * as _ from 'lodash';

@Injectable()
export class UsersService {
  private users: IUser[] = users;

  public getUsers(): IUser[] {
    return this.users;
  }

  public getUser(id: number): IUser {
    return _.find(this.users, { id });
  }

  public addUser(user: IUser): IUser {
    const newUser: IUser = {
      id: _.random(100),
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  public updateUser(id: number, user: IUser): IUser {
    this.users = _.map(this.users, (u) =>
      u.id === id ? { ...u, ...user } : { ...u },
    );
    return _.find(this.users, { id });
  }

  public getTotal(): { total: number } {
    return { total: this.users.length }
  }
  public deleteUser(id: number): IUser[] {
    this.users = _.reject( this.users, { id } )
    return this.users
  }
}
