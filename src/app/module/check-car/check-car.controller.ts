import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CheckCarService } from './check-car.service';
import { CreateCheckCarDto } from './dto/create-check-car.dto';

@ApiTags('check-car')
@Controller('check-car')
export class CheckCarController {
  constructor(private readonly checkCarService: CheckCarService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Look up a UK vehicle by registration number' })
  @ApiResponse({ status: 200, description: 'Vehicle found' })
  @ApiResponse({ status: 400, description: 'Invalid registration number' })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  @HttpCode(HttpStatus.OK)
  async createCarCheck(@Body() dto: CreateCheckCarDto) {
    const result = await this.checkCarService.createCarCheck(dto);

    return {
      message: 'Vehicle found successfully',
      data: result,
    };
  }
}
