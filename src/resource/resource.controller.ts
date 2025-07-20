import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { AccessResponse } from './typedefs';

@Controller('resource')
export class ResourceController {
  private readonly logger = new Logger(ResourceController.name);

  constructor(private readonly service: ResourceService) {}

  @Get(':id/access-list')
  /**
   * Returns all users who have access to a given resource
   *   - Directly shared users
   *   - Users in shared groups
   *   - All users if the resource is shared with everyone
   */
  async accessList(
    @Param('id') resouceId: string,
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ): Promise<AccessResponse[]> {
    this.logger.log('[Resource list:]', { resouceId, page, limit });
    return this.service.accessList(resouceId, page, limit);
  }
}
