import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from '../dto/register.dto';

@Injectable()
export class RegistrationService {
  constructor(private readonly prismaService: PrismaService) {}
  // User registration logic will go here
  async registerUser(userData: RegisterDto) {
    return await this.prismaService.user.create({
      data: userData,
    });
  }
}
