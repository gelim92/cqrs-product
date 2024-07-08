import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AggregatorService } from './aggregator.service';

@Controller('aggregator')
export class AggregatorController {
  constructor(private readonly aggregatorService: AggregatorService) {}

  @Get('orders')
  async getOrders(@Res() response) {
    try {
      const orders = await this.aggregatorService.getAllOrders();
      return response.status(HttpStatus.OK).json(orders);
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
