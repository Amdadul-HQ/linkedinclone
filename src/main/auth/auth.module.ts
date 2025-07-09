import { Module } from '@nestjs/common';
import { RegistrationService } from './services/registration.service';
import { LoginService } from './services/login.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [RegistrationService, LoginService],
})
export class AuthModule {}
