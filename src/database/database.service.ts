import { Inject, Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class DatabaseService {
    constructor( private redisCache : RedisService){

    }

   async saveCache()  {
         await this.redisCache.set('acc','nitin');

         return { msg : 'Redis cache saved'}
   }

   async  getCache() {
      const cache = await this.redisCache.get('acc')
      console.log(cache);
      
    if(cache){
       return cache;
    }
    return {msg:'cache not saved yet'}
   }
}
