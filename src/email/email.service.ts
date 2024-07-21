import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async sendEmail({
    email,
    subject,
    html,
  }: {
    email: string;
    subject: string;
    html: string;
  }) {
    try {
      console.log('Sending email:', email, subject, html);
    } catch (error) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
