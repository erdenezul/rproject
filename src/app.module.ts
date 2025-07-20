import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourceModule } from './resource/resource.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ResourceModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
