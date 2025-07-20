import { Injectable } from '@nestjs/common';
import { UserResource, UserWithResourceCount } from './typedefs';
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

  /**
   * Returns a list of users and how many resources each has access to.
   * @solution Strawman
   * @todo Precomputed approach would be nice instead of running query on the fly.
   */
  async resourceCount(
    page: number,
    limit: number,
  ): Promise<UserWithResourceCount[]> {
    const usersWithResourceCount = await this.db.resourceSharing.groupBy({
      by: ['user_id'],
      _count: {
        resource_id: true,
      },
      take: limit,
      orderBy: {
        _count: {
          user_id: 'desc',
        },
      },
      skip: (page - 1) * limit,
    });

    return usersWithResourceCount.map(
      ({ user_id: userId, _count: { resource_id: count } }) => ({
        count,
        userId,
      }),
    );
  }
}
