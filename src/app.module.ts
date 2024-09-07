import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import configuration from './configuration';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class AppModule {}
