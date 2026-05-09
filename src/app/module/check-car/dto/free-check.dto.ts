import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FreeCheckDto {
  @ApiProperty({
    example: 'AB12 CDE',
    description: 'UK vehicle registration number',
  })
  @Transform(({ value }) =>
    typeof value === 'string' ? value.replace(/\s+/g, '').toUpperCase() : value,
  )
  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z0-9]{2,8}$/, {
    message: 'Registration number must contain only letters and numbers',
  })
  registrationNumber: string;
}
