import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Invoice } from './models/Invoice';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInvoices(): Invoice[] {
    return this.appService.getInvoices();
  }
}
