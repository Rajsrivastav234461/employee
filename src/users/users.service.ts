import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';  

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}  

  async create(data: { name: string; email: string }) {
    return this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: { name?: string; email?: string }) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
