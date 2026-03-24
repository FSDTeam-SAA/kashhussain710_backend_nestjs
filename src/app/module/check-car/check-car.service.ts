import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CheckCar, CheckCarDocument } from './entities/check-car.entity';
import { User, UserDocument } from '../user/entities/user.entity';
import { freeDvlaApi } from 'src/app/helpers/davlaAPI';

@Injectable()
export class CheckCarService {
  constructor(
    @InjectModel(CheckCar.name)
    private readonly checkCarModel: Model<CheckCarDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async createCheckCar(userId: string, registrationNumber: string) {
    const user = await this.userModel.findById(userId);
    if (!user) throw new HttpException('User not found', 404);

    const data = await freeDvlaApi(registrationNumber);

    // Transform API response → Schema format
    const formattedData = {
      registrationNumber: data.registrationNumber,

      heroSection: {
        registrationNumber: data.registrationNumber,
        vehicleName: data.make,
        tax: {
          expiryDate: data.taxDueDate,
          // optional: calculate days left later
        },
        mot: {
          expiryDate: data.motExpiryDate,
        },
      },

      vehicleDetails: {
        modelVariant: data.make,
        primaryColour: data.colour,
        fuelType: data.fuelType,
        engine: `${data.engineCapacity} cc`,
        yearOfManufacture: data.yearOfManufacture,
        euroStatus: data.euroStatus,
        wheelPlan: data.wheelplan,
        lastV5CIssuedDate: data.dateOfLastV5CIssued,
        registrationDate: data.monthOfFirstRegistration,
      },

      co2EmissionFigures: {
        value: data.co2Emissions?.toString(),
      },

      importantVehicleInformation: {
        exported: data.markedForExport ? 'Yes' : 'No',
      },
    };

    // Save to DB
    const saved = await this.checkCarModel.create({
      ...formattedData,
      user: user._id,
    });

    return saved;
  }
}
