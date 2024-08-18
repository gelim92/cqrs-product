import { OrderStatus } from '../utils/OrderStatus';

export class CreateLineItemDto {
  productId: number;
  quantity: number;
}

export class CreateProductDto {
  status: OrderStatus;
  lineItems: CreateLineItemDto[];
}
