import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { EmailModule } from '../email/email.module';
import { LineItemEntity } from './entities/lineItem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'mypassword',
      username: 'myusername',
      entities: [Order, LineItemEntity],
      database: 'cqrs_order',
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Order, LineItemEntity]),
    EmailModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
