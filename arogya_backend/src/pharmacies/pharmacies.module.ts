import { Module } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { PharmaciesController } from './pharmacies.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ResponseHelperService } from 'src/response-helper/response-helper.service';

@Module({
  controllers: [PharmaciesController],
  providers: [PharmaciesService , ResponseHelperService],
  imports: [PrismaModule],

})
export class PharmaciesModule {}
