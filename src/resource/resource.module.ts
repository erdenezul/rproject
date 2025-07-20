import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';

@Module({
  controllers: [ResourceController],
  providers: [ResourceService, PrismaService],
})
export class ResourceModule {}
