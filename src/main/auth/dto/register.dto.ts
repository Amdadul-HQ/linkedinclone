import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'User email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'StrongPassword123',
    description: 'User password (min 6 characters)',
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'John',
    description: 'User first name',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'User last name',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiPropertyOptional({
    example: 'Software Engineer at Google',
    description: 'User headline (like LinkedIn bio)',
  })
  @IsOptional()
  @IsString()
  headline: string;

  @ApiPropertyOptional({
    example: 'San Francisco, CA',
    description: 'User location',
  })
  @IsOptional()
  @IsString()
  location: string;

  @ApiPropertyOptional({
    example: 'Passionate about building scalable web apps...',
    description: 'Short bio/about section',
  })
  @IsOptional()
  @IsString()
  about: string;

  @ApiPropertyOptional({
    example: 'https://example.com/profile.jpg',
    description: 'URL to profile picture',
  })
  @IsOptional()
  @IsString()
  profileUrl: string;
}
