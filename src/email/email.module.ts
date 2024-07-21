import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ConsumerService } from './consumer.service';
import { ProducerService } from './producer.service';

@Module({
  providers: [EmailService, ConsumerService, ProducerService],
  exports: [ProducerService],
})
export class EmailModule {}
