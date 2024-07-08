import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class OrderAggregate {
  @Prop()
  name: string;
}

export const OrderAggregateSchema =
  SchemaFactory.createForClass(OrderAggregate);
