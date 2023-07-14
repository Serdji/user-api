import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private tokenService: AuthService) {}

  @Post()
  signIn(@Body() params: { name: string; password: string }) {
    return this.tokenService.signIn(params);
  }
}
