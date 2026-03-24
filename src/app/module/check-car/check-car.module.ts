import { Module } from '@nestjs/common';
import { CheckCarService } from './check-car.service';
import { CheckCarController } from './check-car.controller';

@Module({
  controllers: [CheckCarController],
  providers: [CheckCarService],
})
export class CheckCarModule {}
