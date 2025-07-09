import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthController } from './services/auth.controller';
import { AuthService } from './services/auth.service';
import { RegistrationService } from './services/registration.service';
import { LoginService } from './services/login.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, RegistrationService, LoginService]
})
export class AuthModule {}
