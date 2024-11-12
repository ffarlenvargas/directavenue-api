import { Injectable } from '@nestjs/common';
import { PrismaService } from './config/prisma/prisma.service';
import { Response } from 'express';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}
  async getHello(res: Response): Promise<any> {
    const result = await this.prismaService.advertiser.findFirst({
      where: { recId: 1 },
    });
    res.status(200).send({ ...result, advtId: result.advtId.toString() });
  }
}
