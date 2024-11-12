import { GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GraphQLConfigService implements GqlOptionsFactory {
  constructor(private prismaService: PrismaService) {}
  createGqlOptions(): Promise<ApolloDriverConfig> | ApolloDriverConfig {
    return {
      autoSchemaFile: true,
      introspection: true,
      playground: {
        endpoint: 'graphql',
      },
      context: async () => {
        return { prisma: this.prismaService };
      },
    };
  }
}
