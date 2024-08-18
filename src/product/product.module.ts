import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/product.entity';
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
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
