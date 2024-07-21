import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { AggregatorModule } from './aggregator/aggregator.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [OrderModule, AggregatorModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
