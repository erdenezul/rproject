import { Injectable } from '@nestjs/common';
import { AccessResponse } from './typedefs';
import { PrismaService } from '../prisma/prisma.service';
import { $Enums } from '@prisma/client';

@Injectable()
export class ResourceService {
  constructor(private readonly db: PrismaService) {}

  /**
   * Returns all users who have access to a given resource
   * @behavior
   * 1. Direcly shared users
   * 2. Users in shared group2
   * 3. All users if the resource is shared with everyone.
   */
  async accessList(
    resourceId: string,
    page: number,
    limit: number,
  ): Promise<AccessResponse[]> {
    /**
     * @behavior #3
     */
    const resource = await this.db.resource.findUniqueOrThrow({
      where: { id: resourceId },
    });
    if (resource.type === $Enums.ResourceType.Global) {
      const users = await this.db.user.findMany({
        take: limit,
        skip: (page - 1) * limit,
      });
      return users.map(({ id: userId }) => ({ userId, accessType: 'Global' }));
    }

    /**
     * @behavior #1 and #2
     */
    const resources = await this.db.resourceSharing.findMany({
      where: { resource_id: resourceId },
      take: limit,
      skip: (page - 1) * limit,
    });

    return resources.map(({ user_id: userId, access_type: accessType }) => ({
      accessType,
      userId,
    }));
  }
}
