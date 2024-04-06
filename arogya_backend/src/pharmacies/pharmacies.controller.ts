import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreatePharmacyOwnerDto } from './dto/create-owner.dto';
import { AuthGuard } from 'src/auth/strategy/jwt.strategy';


@ApiTags('Pharmacies')
@ApiBearerAuth('JWT-auth') 
@Controller('pharmacies')
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @Post()
  create(@Body() createPharmacyDto: CreatePharmacyDto) {
    return this.pharmaciesService.create(createPharmacyDto);
  }

  @Post('owner')
  createOwner(@Body() dto: CreatePharmacyOwnerDto) {
    return this.pharmaciesService.createOwner(dto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.pharmaciesService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pharmaciesService.remove(+id);
  }
}
