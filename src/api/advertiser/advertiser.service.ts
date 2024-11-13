import { Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { IContext } from 'src/shared/types/context.interface';

@Injectable()
export class AdvertiserService {
  constructor(@Inject(CONTEXT) private readonly context: IContext) {}

  async getAdvertiser() {
    const result = await this.context.prisma.advertiser.findFirst({});
    return { ...result, advtId: Number(result.advtId) };
  }
}
