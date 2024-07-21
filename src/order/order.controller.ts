import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ProducerService } from '../email/producer.service';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly producerService: ProducerService,
  ) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const createdOrder = await this.orderService.create(createOrderDto);
    this.producerService.addToEmailQueue({
      email: JSON.stringify(createdOrder),
      subject: 'Order Created',
      html: 'Your order has been created',
    });
    return createdOrder;
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
