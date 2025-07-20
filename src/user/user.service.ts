import { Injectable } from '@nestjs/common';
import { UserResource } from './typedefs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly db: PrismaService) {}

  async userResources(
    userId: string,
    page: number,
    limit: number,
  ): Promise<UserResource[]> {
    const resources = await this.db.resourceSharing.findMany({
      where: {
        user_id: userId,
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    return resources.map(
      ({ resource_id: resourceId, access_type: accessType }) => ({
        resourceId,
        accessType,
      }),
    );
  }
}
