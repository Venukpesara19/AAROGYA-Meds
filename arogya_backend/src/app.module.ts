import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { MedicinesModule } from './medicines/medicines.module';
import { ScheduleModule } from './schedule/schedule.module';
import { OrdersModule } from './orders/orders.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ResponseHelperService } from './response-helper/response-helper.service';

@Module({
  imports: [AuthModule, PharmaciesModule, MedicinesModule, ScheduleModule, OrdersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ResponseHelperService],
})
export class AppModule {}
