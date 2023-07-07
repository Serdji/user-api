import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async signIn(params: { name: string; password: string }) {
    return { access_token: await this.jwtService.signAsync(params) };
  }
}
