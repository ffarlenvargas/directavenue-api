import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { GraphQLConfigService } from './shared/config/graphql/graphql-config.service';
import { PrismaModule } from './shared/config/prisma/prisma.module';
import { AdvertiserModule } from './api/advertiser/advertiser.module';
import { CodeModule } from './api/code/code.module';
import configuration from './shared/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphQLConfigService,
    }),
    PrismaModule,
    AdvertiserModule,
    CodeModule,
  ],
})
export class AppModule {}
