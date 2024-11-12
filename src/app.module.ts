import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLConfigService } from './shared/config/graphql/graphql-config.service';
import { PrismaModule } from './shared/config/prisma/prisma.module';
import { AdvertiserModule } from './advertiser/advertiser.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphQLConfigService,
    }),
    PrismaModule,
    AdvertiserModule,
  ],
})
export class AppModule {}
