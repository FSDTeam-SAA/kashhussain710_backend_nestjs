import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/entities/user.entity';
import { VehicleReport, VehicleReportSchema } from './entities/check-car.entity';
import { CheckCarController } from './check-car.controller';
import { CheckCarService } from './check-car.service';

@Module({
  imports: [
    MongooseModule.forFeature([
       { name: VehicleReport.name, schema: VehicleReportSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [CheckCarController],
  providers: [CheckCarService],
})
export class CheckCarModule {}
