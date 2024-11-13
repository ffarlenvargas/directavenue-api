import { Test, TestingModule } from '@nestjs/testing';
import { AdvertiserResolver } from './advertiser.resolver';
import { AdvertiserService } from './advertiser.service';
import { Advertiser } from './dto/advertiser.dto';

const mockAdvertiser: Advertiser = {
  recId: 1,
  advtId: 1166,
  address:
    '220 West Germantown Pike Suite 250,45-5553972,Plymouth Meeting,PA,US',
  advtName: 'AdaptHealth LLC',
  brandName: 'ActivStyle',
  campName: 'Q1 - 2024 Media Buys',
  contact: 'Benjamin Helfinstein',
  email: 'bhelfinstein@adapthealth.com',
  notes:
    'THIS IS A CREATIVE SPECIFIC CONTRACT.  YOU MUST REFERENCE THE ACCESS AND DESCRIPTION LISTED ABOVE WHEN ENTERING THE BRAND FOR THIS ORDER Alterations to this order are considered null unless approved and confirmed by the media buyer All Schedules are subject to 48 hours cancellation No Make Good w/o Prior Approval All Schedules require Pre & Post Logs 20 min. separation required on all spots and 60 min. separation required on all spots $500 or more. Please confirm receipt of this order',
};

const advertiserServiceMock = {
  getAdvertiser: jest.fn((): Advertiser => mockAdvertiser),
};

describe('Advertiser Resolver (e2e)', () => {
  let resolver: AdvertiserResolver;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [
        AdvertiserResolver,
        { provide: AdvertiserService, useValue: advertiserServiceMock },
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
