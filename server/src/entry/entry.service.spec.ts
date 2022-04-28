import { createMock } from '@golevelup/ts-jest';
import { Test, TestingModule } from '@nestjs/testing';

import { HashService } from '../hash/hash.service';
import { PrismaService } from '../prisma/prisma.service';

import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { EntryService } from './entry.service';

describe('EntryService', () => {
  let entryService: EntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntryService, PrismaService, HashService],
    })
      .useMocker(token => {
        if (token === PrismaService) {
          return {
            entry: createMock<PrismaService>().entry,
          };
        }
        if (token === HashService) {
          return createMock<HashService>();
        }
      })
      .compile();

    entryService = module.get<EntryService>(EntryService);
  });

  it('should be defined', () => {
    expect(entryService).toBeDefined();
  });

  it('creates a new entry', async () => {
    expect.assertions(1);
    const entryData: CreateEntryDto = {
      appName: 'sample app',
      emailOrUsername: 'test@test.com',
      password: 'abc123',
    };
    const entry = await entryService.create({
      ...entryData,
      userId: '123',
    });
    expect(entryService.create).toHaveBeenCalled();
    console.log(entry);
  });

  it('finds an unique entry', async () => {
    expect.assertions(1);
    const entryId = 0;
    await entryService.find({
      id: entryId,
    });
    expect(entryService.find).toHaveBeenCalled();
    expect(entryService.find).lastReturnedWith(Promise.resolve(null));
  });

  it('finds some entries', async () => {
    expect.assertions(1);
    const entryIds = [1, 2, 3, 4, 5];
    await entryService.findAll({
      where: {
        id: {
          in: entryIds,
        },
      },
    });
    expect(entryService.find).toHaveBeenCalled();
    expect(entryService.find).lastReturnedWith(Promise.resolve([]));
  });

  it('updates an entry', async () => {
    expect.assertions(1);
    const entryId = 0;
    const entryData: UpdateEntryDto = {
      appName: 'sample app',
      emailOrUsername: 'test@test.com',
      password: 'abc123',
    };
    await entryService.update({
      where: {
        id: entryId,
      },
      data: entryData,
    });
    expect(entryService.find).toHaveBeenCalled();
    expect(entryService.find).lastReturnedWith(Promise.resolve(null));
  });

  it('deletes an entry', async () => {
    expect.assertions(1);
    const entryId = 0;
    await entryService.remove({
      id: entryId,
    });
    expect(entryService.find).toHaveBeenCalled();
    expect(entryService.find).lastReturnedWith(Promise.resolve(null));
  });
});
