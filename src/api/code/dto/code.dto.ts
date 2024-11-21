import { Field, Int, ObjectType } from '@nestjs/graphql';

/**
 * Database entity class
 */
@ObjectType()
export class Code {
  @Field(() => Int)
  cdId: number;

  @Field(() => String)
  cdType: string;

  @Field(() => String)
  cdName: string;

  @Field(() => String, { nullable: true })
  cdMap: string | null;

  @Field(() => Date, { nullable: true })
  time_stamp: Date | null;
}
