import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CarTaxDto {
  @ApiProperty({
    example: 'K50HMA',
    description: 'UK Vehicle Registration Mark (number plate)',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z0-9 ]{2,8}$/i, {
    message: 'Invalid UK registration number',
  })
  vrm!: string;
}
