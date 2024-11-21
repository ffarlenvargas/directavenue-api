import { Module } from '@nestjs/common';
import { AdvertiserResolver } from './advertiser.resolver';
import { GenericService } from '../services/generic.service';

/**
 * Instantiate the Entity resolver and the generic database access object
 */
@Module({
  providers: [GenericService, AdvertiserResolver],
})
export class AdvertiserModule {}
