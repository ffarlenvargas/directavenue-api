import { Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { IContext } from 'src/shared/types/context.interface';

@Injectable()
/**
 * Generic database access object
 */
export class GenericService<T> {
  constructor(@Inject(CONTEXT) private readonly context: IContext) {}

  /**
   * Returns entity firstResult
   * @param entityName - Entity to work with
   * @returns - Object - First entity result
   */
  async getEntity(entityName: string): Promise<T> {
    const result: T = await this.context.prisma[entityName].findFirst();

    return this.convertBigIntFields(result);
  }

  /**
   * Allows to get all members
   * @param entityName - Entity to work with
   * @returns Array - All entity members
   */
  async getAllEntity(entityName: string): Promise<Array<T>> {
    const result: Array<T> = await this.context.prisma[entityName].findMany();

    return result.map((item) => this.convertBigIntFields(item));
  }

  /**
   * Allows to convert BigInt Fields into Numbers
   * @param item - Object type
   * @returns A new object with BigInts fields converted into numbers
   */
  private convertBigIntFields<T>(item: T): T {
    const convertedItem = { ...item };

    Object.keys(convertedItem).forEach((key) => {
      const value = convertedItem[key as keyof T];

      if (typeof value === 'bigint') {
        convertedItem[key as keyof T] = Number(value) as any;
      }
    });

    return convertedItem;
  }
}
