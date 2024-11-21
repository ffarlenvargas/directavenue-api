import { Field, Int, ObjectType } from '@nestjs/graphql';
/**
 * Database entity class
 */
@ObjectType()
export class Advertiser {
  @Field(() => Int)
  recId: number;

  @Field(() => Number)
  advtId: number;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String)
  advtName: string;

  @Field(() => String)
  brandName: string;

  @Field(() => String)
  campName: string;

  @Field(() => String, { nullable: true })
  contact: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  notes: string;
}
