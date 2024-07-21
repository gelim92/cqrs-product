import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'mypassword',
      username: 'myusername',
      entities: [Order],
      database: 'cqrs_order',
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Order]),
    EmailModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
