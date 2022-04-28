import { Injectable } from '@nestjs/common';
import { Entry, Prisma } from '@prisma/client';

import { HashService } from '../hash/hash.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EntryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hashService: HashService,
  ) {}

  async create(data: Prisma.EntryCreateInput) {
    return await this.prisma.entry.create({
      data: {
        ...data,
        password: await this.hashService.hash(data.password),
      },
    });
  }

  async find(
    todoWhereUniqueInput: Prisma.EntryWhereUniqueInput,
  ): Promise<Entry | null> {
    return this.prisma.entry.findUnique({
      where: todoWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EntryWhereUniqueInput;
    where?: Prisma.EntryWhereInput;
    orderBy?: Prisma.EntryOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.entry.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async update(params: {
    where: Prisma.EntryWhereUniqueInput;
    data: Prisma.EntryUpdateInput & { password?: string };
  }) {
    const { where, data } = params;
    if (data.password) {
      data.password = await this.hashService.hash(data.password);
    }
    return this.prisma.entry.update({
      where,
      data,
    });
  }

  async remove(where: Prisma.EntryWhereUniqueInput) {
    return this.prisma.entry.delete({
      where,
    });
  }
}
