import { OrderStatus } from '../utils/OrderStatus';

export class CreateLineItemDto {
  productId: number;
  quantity: number;
}

export class CreateOrderDto {
  status: OrderStatus;
  lineItems: CreateLineItemDto[];
}
