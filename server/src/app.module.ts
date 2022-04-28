import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { EntryModule } from './entry/entry.module';
import { PrismaService } from './prisma/prisma.service';
import { HashService } from './hash/hash.service';

@Module({
  imports: [EntryModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService, PrismaService, HashService],
})
export class AppModule {}
