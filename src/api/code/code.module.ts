import { Module } from '@nestjs/common';
import { CodeResolver } from './code.resolver';
import { GenericService } from '../services/generic.service';

/**
 * Instantiate the Entity resolver and the generic database access object
 */
@Module({
  providers: [GenericService, CodeResolver],
})
export class CodeModule {}
