import { Body, Controller, Post, Res } from '@nestjs/common';
import { RegistrationService } from './services/registration.service';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';
import sendResponse from 'src/utils/sendResponse';
import status from 'http-status';

@Controller('auth')
export class AuthController {
  constructor(private readonly registrationService: RegistrationService) {}

  // Registration endpoint can be added here
  @Post('register')
  async registerUser(@Body() dto: RegisterDto, @Res() res: Response) {
    const result = await this.registrationService.registerUser(dto);
    return sendResponse(res, {
      statusCode: status.CREATED,
      success: true,
      message: 'User registered successfully',
      data: result,
    });
  }
}
