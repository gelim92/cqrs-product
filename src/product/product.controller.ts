import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProducerService } from '../email/producer.service';

@Controller('orders')
export class ProductController {
  constructor(
    private readonly orderService: ProductService,
    private readonly producerService: ProducerService,
  ) {}

  @Post()
  async create(@Body() createOrderDto: CreateProductDto) {
    const createdOrder = await this.orderService.create(createOrderDto);
    // this.producerService.addToEmailQueue({
    //   email: JSON.stringify(createdOrder),
    //   subject: 'Order Created',
    //   html: 'Your order has been created',
    // });
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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateProductDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
