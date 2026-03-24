import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCheckCarDto {
  @ApiProperty({
    example: 'AB12CDE',
    description: 'UK vehicle registration number (no spaces)',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z0-9]{2,7}$/, {
    message: 'registrationNumber must be 2–7 alphanumeric characters',
  })
  registrationNumber: string;
}
