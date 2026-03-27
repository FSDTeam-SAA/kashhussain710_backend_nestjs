// import {
//   Body,
//   Controller,
//   Get,
//   HttpCode,
//   HttpStatus,
//   Param,
//   Post,
//   Req,
//   UseGuards,
// } from '@nestjs/common';
// import {
//   ApiBadRequestResponse,
//   ApiBearerAuth,
//   ApiBody,
//   ApiCreatedResponse,
//   ApiNotFoundResponse,
//   ApiOkResponse,
//   ApiOperation,
//   ApiParam,
//   ApiTags,
// } from '@nestjs/swagger';
// import { CheckCarService } from './check-car.service';
// import { CreateCheckCarDto } from './dto/create-check-car.dto';
// import AuthGuard from 'src/app/middlewares/auth.guard';
// import type { Request } from 'express';

// @ApiTags('check-car')
// @Controller('check-car')
// export class CheckCarController {
//   constructor(private readonly checkCarService: CheckCarService) {}

//   @Post()
//   @HttpCode(HttpStatus.CREATED)
//   @ApiOperation({
//     summary: 'Create vehicle report data from DVLA registration lookup',
//   })
//   @ApiBody({ type: CreateCheckCarDto })
//   @ApiCreatedResponse({ description: 'Vehicle report created successfully' })
//   @ApiBadRequestResponse({ description: 'Invalid registration number' })
//   @ApiNotFoundResponse({ description: 'Vehicle not found in DVLA' })
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard('user'))
//   async createCheckCar(@Req() req: Request, @Body() dto: CreateCheckCarDto) {
//     const result = await this.checkCarService.createCheckCar(req.user!.id, dto);
//     return {
//       statusCode: 201,
//       success: true,
//       message: 'Vehicle report created successfully',
//       data: result,
//     };
//   }

//   @Get('history/:registration')
//   @HttpCode(HttpStatus.OK)
//   @ApiOperation({ summary: 'Get full MOT history for a vehicle' })
//   @ApiParam({
//     name: 'registration',
//     example: 'AB12CDE',
//     description: 'UK vehicle registration number (no spaces)',
//   })
//   @ApiOkResponse({
//     description: 'Full MOT history returned successfully',
//     schema: {
//       example: {
//         statusCode: 200,
//         success: true,
//         message: 'MOT history fetched successfully',
//         data: {
//           registration: 'AB12CDE',
//           make: 'BMW',
//           model: '3 SERIES',
//           firstUsedDate: '2018-05-01',
//           fuelType: 'Petrol',
//           primaryColour: 'Black',
//           hasOutstandingRecall: 'No',
//           summary: { totalTests: 4, passed: 4, failed: 0 },
//           mileage: {
//             lastMotMileage: 40080,
//             average: 5010,
//             mileageIssues: 'No issues detected',
//             status: 'LOW',
//           },
//           motTests: [
//             {
//               completedDate: '2024-05-10',
//               testResult: 'PASSED',
//               expiryDate: '2025-05-09',
//               odometerValue: 40080,
//               odometerUnit: 'mi',
//               motTestNumber: '123456789',
//               defects: [],
//               advisories: [],
//               minorDefects: [],
//               majorDefects: [],
//               dangerousDefects: [],
//               prsFails: [],
//             },
//           ],
//         },
//       },
//     },
//   })
//   @ApiNotFoundResponse({ description: 'Vehicle not found in DVLA' })
//   async getMotHistory(@Param('registration') registration: string) {
//     const result = await this.checkCarService.getMotHistory(registration);
//     return {
//       statusCode: 200,
//       success: true,
//       message: 'MOT history fetched successfully',
//       data: result,
//     };
//   }
// }

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  Param,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { FreeCheckDto } from './dto/free-check.dto';
import { PaidCheckDto } from './dto/paid-check.dto';
import { MotHistoryDto } from './dto/mot-history.dto';

import type { Request } from 'express';
import AuthGuard from 'src/app/middlewares/auth.guard';
import { CheckCarService } from './check-car.service';

@ApiTags('Vehicle Check')
@Controller('vehicle-check')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard('user'))
export class CheckCarController {
  constructor(private readonly vehicleCheckService: CheckCarService) {}

  @Post('free')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Free vehicle check - basic information' })
  @ApiBody({ type: FreeCheckDto })
  @ApiResponse({
    status: 200,
    description: 'Free check completed successfully',
  })
  async freeCheck(@Req() req: Request, @Body() dto: FreeCheckDto) {
    const result = await this.vehicleCheckService.freeCheck(req.user!.id, dto);
    return {
      statusCode: 200,
      success: true,
      message: 'Free vehicle check completed',
      data: result,
    };
  }

  @Post('paid')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Paid vehicle check - full detailed report' })
  @ApiBody({ type: PaidCheckDto })
  @ApiResponse({
    status: 200,
    description: 'Paid check completed successfully',
  })
  async paidCheck(
    @Req() req: Request,
    @Body() dto: PaidCheckDto,
    @Body('paymentId') paymentId?: string,
  ) {
    const result = await this.vehicleCheckService.paidCheck(
      req.user!.id,
      dto,
      paymentId,
    );
    return {
      statusCode: 200,
      success: true,
      message: 'Paid vehicle check completed',
      data: result,
    };
  }

  @Post('mot-history')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get full MOT history only' })
  @ApiBody({ type: MotHistoryDto })
  @ApiResponse({
    status: 200,
    description: 'MOT history retrieved successfully',
  })
  async getMotHistory(@Req() req: Request, @Body() dto: MotHistoryDto) {
    const result = await this.vehicleCheckService.getMotHistoryOnly(
      req.user!.id,
      dto,
    );
    return {
      statusCode: 200,
      success: true,
      message: 'MOT history retrieved successfully',
      data: result,
    };
  }

  @Get('reports')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all user vehicle reports' })
  @ApiResponse({ status: 200, description: 'Reports retrieved successfully' })
  async getUserReports(@Req() req: Request) {
    const result = await this.vehicleCheckService.getUserReports(req.user!.id);
    return {
      statusCode: 200,
      success: true,
      message: 'Reports retrieved successfully',
      data: result,
    };
  }

  @Get('report/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get single report by ID' })
  @ApiResponse({ status: 200, description: 'Report retrieved successfully' })
  async getReportById(@Req() req: Request, @Param('id') id: string) {
    const result = await this.vehicleCheckService.getReportById(
      id,
      req.user!.id,
    );
    return {
      statusCode: 200,
      success: true,
      message: 'Report retrieved successfully',
      data: result,
    };
  }
}
