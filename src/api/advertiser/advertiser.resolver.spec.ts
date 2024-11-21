import { Test, TestingModule } from '@nestjs/testing';
import { AdvertiserResolver } from './advertiser.resolver';
import { GenericService } from '../services/generic.service';
import { Advertiser } from './dto/advertiser.dto';

const mockAdvertiser: Advertiser = {
  recId: 1,
  advtId: 2,
  address: 'test',
  advtName: 'test',
  brandName: 'test',
  campName: 'test',
  contact: 'arlen',
  email: 'arlen@yopmail.con',
  notes: 'Note',
};

const advertiserServiceMock = {
  getAdvertiser: jest.fn((): Advertiser => mockAdvertiser),
};

describe('Advertiser Resolver (e2e)', () => {
  let resolver: AdvertiserResolver;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [
        GenericService,
        { provide: GenericService, useValue: advertiserServiceMock },
      ],
    }).compile();

    resolver = moduleFixture.get<AdvertiserResolver>(AdvertiserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should query for a single advertiser', async () => {
    const result = await resolver.getAdvertiser();
    expect(result.recId).toEqual(1);
  });
});
