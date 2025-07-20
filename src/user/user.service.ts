import { Injectable } from '@nestjs/common';
import { UserResource } from './typedefs';

@Injectable()
export class UserService {
  async userResources(userId: string): Promise<UserResource[]> {
    return [];
  }
}
