import { Module } from '@nestjs/common';
import { AggregatorService } from './aggregator.service';
import { AggregatorController } from './aggregator.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderAggregateSchema } from './schema/OrderAggregate.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://myusername:mypassword@localhost:27017', {
      dbName: 'cqrs',
    }),
    MongooseModule.forFeature([
      { name: 'OrderAggregate', schema: OrderAggregateSchema },
    ]),
  ],
  controllers: [AggregatorController],
  providers: [AggregatorService],
})
export class AggregatorModule {}
