import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  DefaultValuePipe,
  Query,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import RequestWithUser from '../utils/requestWithUser';

import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { EntryService } from './entry.service';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Post()
  @UseGuards(AuthGuard('firebase-jwt'))
  async create(
    @Req() req: RequestWithUser,
    @Body() createEntryDto: CreateEntryDto,
  ) {
    return await this.entryService.create({
      ...createEntryDto,
      userId: req.user.uid,
    });
  }

  @Get()
  @UseGuards(AuthGuard('firebase-jwt'))
  async findAll(
    @Req() req: RequestWithUser,
    @Query('skip', new DefaultValuePipe(undefined))
    skip?: number,
    @Query('take', new DefaultValuePipe(undefined))
    take?: number,
    @Query('startAt', new DefaultValuePipe(undefined))
    startAt?: number,
    @Query('sortBy', new DefaultValuePipe(undefined))
    sortBy?: string,
    @Query('sortDir', new DefaultValuePipe('asc'))
    sortDir?: 'asc' | 'desc',
  ) {
    return await this.entryService.findAll({
      skip,
      take,
      cursor:
        startAt === undefined
          ? undefined
          : {
              id: startAt,
            },
      orderBy:
        sortBy === undefined
          ? undefined
          : {
              [sortBy]: sortDir,
            },
      where: {
        userId: req.user.uid,
      },
    });
  }

  @Get(':id')
  @UseGuards(AuthGuard('firebase-jwt'))
  async findOne(@Req() req: RequestWithUser, @Param('id') id: number) {
    const entry = await this.entryService.find({
      id,
    });
    if (entry.userId !== req.user.uid) {
      throw new UnauthorizedException();
    }
    if (entry === null) {
      throw new NotFoundException();
    }
    return entry;
  }

  @Patch(':id')
  @UseGuards(AuthGuard('firebase-jwt'))
  async update(
    @Req() req: RequestWithUser,
    @Param('id') id: number,
    @Body() updateEntryDto: UpdateEntryDto,
  ) {
    const entry = await this.entryService.find({
      id,
    });
    if (entry.userId !== req.user.uid) {
      throw new UnauthorizedException();
    }
    if (entry === null) {
      throw new NotFoundException();
    }
    return await this.entryService.update({
      where: {
        id,
      },
      data: updateEntryDto,
    });
  }

  @Delete(':id')
  @UseGuards(AuthGuard('firebase-jwt'))
  async remove(@Req() req: RequestWithUser, @Param('id') id: number) {
    const entry = await this.entryService.find({
      id,
    });
    if (entry.userId !== req.user.uid) {
      throw new UnauthorizedException();
    }
    if (entry === null) {
      throw new NotFoundException();
    }
    return await this.entryService.remove({
      id,
    });
  }
}
