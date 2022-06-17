import { Module } from '@nestjs/common';
import { RedisModule } from 'src/redis/redis.module';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';

@Module({
  controllers: [DatabaseController],
  providers: [DatabaseService],
  imports :[RedisModule]
})
export class DatabaseModule {}
