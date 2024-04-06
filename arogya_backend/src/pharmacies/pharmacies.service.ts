import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseHelperService } from 'src/response-helper/response-helper.service';
import { CreatePharmacyOwnerDto } from './dto/create-owner.dto';

@Injectable()
export class PharmaciesService {
  constructor(
    private prisma: PrismaService,
    private res: ResponseHelperService,
  ) {}

  async create(createPharmacyDto: CreatePharmacyDto) {
    let owner = await this.prisma.pharmacyOwner.findFirst({
      where: {
        id: createPharmacyDto.owner,
      },
    });
    if (!owner) {
      throw new NotFoundException('Owner not found');
    }
    var updatedPharmacy = await this.prisma.pharmacy.create({
      data: {
        pharmacyOwnerID: createPharmacyDto.owner,
        name: createPharmacyDto.name,
        address: createPharmacyDto.address,
        lat: createPharmacyDto.lat,
        lng: createPharmacyDto.lng,
        ratings: createPharmacyDto.ratings,
        telephone: createPharmacyDto.telephone,
        opensAt : createPharmacyDto.opensAt,
        closedAt : createPharmacyDto.closeAt
      },
    });
    return this.res.returnSuccess(updatedPharmacy);
  }

  async findAll() {
    var pharmacyList = await this.prisma.pharmacy.findMany({
      take: 50,
    });
    return this.res.returnSuccess(pharmacyList);
  }

  update(id: number, updatePharmacyDto: UpdatePharmacyDto) {
    return `This action updates a #${id} pharmacy`;
  }
  async createOwner(dto: CreatePharmacyOwnerDto) {
    var owner = await this.prisma.pharmacyOwner.create({
      data: {
        first_name: dto.first_name,
        last_name: dto.last_name,
      },
    });
    return this.res.returnSuccess(owner);
  }
  async remove(id: number) {
    var pharmacy = await this.prisma.pharmacy.findFirst({
      where: {
        id: id,
      },
    });
    if (!pharmacy) {
      throw new NotFoundException('Pharmacy not found');
    }
    await this.prisma.pharmacy.delete({
      where: {
        id: pharmacy.id,
      },
    });
    return this.res.returnSuccess({
      status: 'pharmacy deleted',
    });
  }
}
