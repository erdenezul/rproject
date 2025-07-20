import { Controller, Get, Logger, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResource } from './typedefs';

@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly service: UserService) {}

  @Get('user/:id/resources')
  /**
   * Return all resources that belong to user
   * @keep_in_mind
   * 1. Overlapping shares( direct + via group)
   * 2. Global shares
   * @behavior
   * 1. When user had a direct access to resource, then it should return as part of list
   * 2. When user had a direct access to resource and also group access, then it should only return
   *    one entity as part of list
   */
  async userResources(@Param('id') userId: string): Promise<UserResource[]> {
    this.logger.log('[User resources:]', { userId });
    return this.service.userResources(userId);
  }
}
