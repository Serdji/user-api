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
    const newUser = {
      id: _.random(100),
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  public updateUser(id: number, user: IUser) {
    this.users = _.map(this.users, (u) =>
      u.id === id ? { ...u, ...user } : { ...u },
    );
    return _.find(this.users, { id });
  }
}
