import { Module } from '@nestjs/common';
import { AdvertiserService } from './advertiser.service';
import { AdvertiserResolver } from './advertiser.resolver';

@Module({
  providers: [AdvertiserService, AdvertiserResolver],
})
export class AdvertiserModule {}
