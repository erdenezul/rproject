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
    return [];
  }
}
