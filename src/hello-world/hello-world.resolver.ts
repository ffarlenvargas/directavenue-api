import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }
}
