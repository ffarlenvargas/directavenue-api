import { Query, Resolver } from '@nestjs/graphql';
import { Advertiser } from './dto/advertiser.dto';
import { AdvertiserService } from './advertiser.service';

@Resolver(Advertiser)
export class AdvertiserResolver {
  constructor(private readonly advertiserService: AdvertiserService) {}

  @Query(() => Advertiser)
  async getAdvertiser(): Promise<Advertiser> {
    return this.advertiserService.getAdvertiser();
  }
}
