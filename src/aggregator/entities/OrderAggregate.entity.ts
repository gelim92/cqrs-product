import { Document } from 'mongoose';

export interface IOrderAggregate extends Document {
  readonly name: string;
}
