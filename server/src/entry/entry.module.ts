import { Module } from '@nestjs/common';

import { HashService } from '../hash/hash.service';
import { PrismaService } from '../prisma/prisma.service';

import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';

@Module({
  controllers: [EntryController],
  providers: [EntryService, PrismaService, HashService],
})
export class EntryModule {}
