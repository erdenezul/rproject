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
   */
  async userResources(@Param('id') userId: string): Promise<UserResource[]> {
    this.logger.log('[User resources:]', { userId });
    return this.service.userResources(userId);
  }
}
