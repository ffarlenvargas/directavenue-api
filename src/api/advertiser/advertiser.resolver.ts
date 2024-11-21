import { Query, Resolver } from '@nestjs/graphql';
import { Advertiser } from './dto/advertiser.dto';
import { GenericService } from '../services/generic.service';

/**
 * Allows to work with Database Advertiser entity
 */
@Resolver(Advertiser)
export class AdvertiserResolver {
  constructor(private readonly advertiserService: GenericService<Advertiser>) {}

  /**
   * Allows to get the first entity
   * @returns (object) - First Advertiser
   */
  @Query(() => Advertiser)
  async getAdvertiser(): Promise<Advertiser> {
    return this.advertiserService.getEntity('Advertiser');
  }
}
