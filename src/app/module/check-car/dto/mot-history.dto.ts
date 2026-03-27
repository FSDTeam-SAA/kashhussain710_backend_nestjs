import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MotHistoryDto {
  @ApiProperty({
    example: 'AB12CDE',
    description: 'UK vehicle registration number (2-8 characters)',
  })
  @Transform(({ value }) =>
    typeof value === 'string' ? value.replace(/\s+/g, '').toUpperCase() : value,
  )
  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z0-9]{2,8}$/, {
    message: 'Registration number must be 2-8 characters containing only letters and numbers',
  })
  registrationNumber: string;
}