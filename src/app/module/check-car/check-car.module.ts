import { Module } from '@nestjs/common';
import { CheckCarService } from './check-car.service';
import { CheckCarController } from './check-car.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckCar, CheckCarSchema } from './entities/check-car.entity';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CheckCar.name, schema: CheckCarSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [CheckCarController],
  providers: [CheckCarService],
})
export class CheckCarModule {}
