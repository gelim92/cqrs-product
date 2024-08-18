import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  create(createOrderDto: CreateProductDto) {
    const newOrder = this.orderRepository.create(createOrderDto);
    return this.orderRepository.save(newOrder);
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOneBy({ id });
  }

  update(id: number, updateOrderDto: UpdateProductDto) {
    return this.orderRepository.update(id, updateOrderDto);
  }

  async remove(id: number) {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) {
      throw new Error('Order not found');
    }
    return this.orderRepository.remove(order);
  }
}
