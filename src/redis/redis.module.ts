import { CacheModule, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
@Module({
    imports:[CacheModule.register({
        isGlobal: true,
        url:process.env.REDIS_URL
    })],
  providers: [RedisService],
  exports: [RedisService]

})
export class RedisModule {}
