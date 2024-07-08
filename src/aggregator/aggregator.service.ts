import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IOrderAggregate } from './entities/OrderAggregate.entity';

@Injectable()
export class AggregatorService {
  constructor(
    @InjectModel('OrderAggregate') private orderModel: Model<IOrderAggregate>,
  ) {}

  getAllOrders(): Promise<IOrderAggregate[]> {
    return this.orderModel.find();
  }
}
