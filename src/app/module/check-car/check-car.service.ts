import { Injectable, HttpException } from '@nestjs/common';
import { CreateCheckCarDto } from './dto/create-check-car.dto';
import { freeDvlaApi, VehicleResponse } from 'src/app/helpers/davlaAPI';

@Injectable()
export class CheckCarService {
  constructor() {}

  async createCarCheck(dto: CreateCheckCarDto): Promise<VehicleResponse> {
    const result = await freeDvlaApi(dto.registrationNumber);
    return result;
  }
}
