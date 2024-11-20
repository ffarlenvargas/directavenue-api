import { Query, Resolver } from '@nestjs/graphql';
import { Code } from './dto/code.dto';
import { GenericService } from '../services/generic.service';

/**
 * Allows to work with Database Code entity
 */
@Resolver(Code)
export class CodeResolver {
  constructor(private readonly codeService: GenericService<Code>) {}

  /**
   * Allows to get the first entity
   * @returns (Object) - First Code
   */
  @Query(() => Code)
  async getCode(): Promise<Code> {
    return this.codeService.getEntity('Code');
  }

  /**
   * Allows to get all entities
   * @returns (Array) - All Codes
   */
  @Query(() => [Code])
  async getAllCode(): Promise<Array<Code>> {
    return await this.codeService.getAllEntity('Code');
  }
}
