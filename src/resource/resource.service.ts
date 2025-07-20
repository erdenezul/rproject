import { Injectable } from '@nestjs/common';
import { AccessResponse } from './typedefs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResourceService {
  constructor(private readonly db: PrismaService) {}

  async accessList(
    resourceId: string,
    page: number,
    limit: number,
  ): Promise<AccessResponse[]> {
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
