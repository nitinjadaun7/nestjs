import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import {  Cache } from 'cache-manager';

@Injectable()
export class RedisService {
    constructor(@Inject(CACHE_MANAGER) private cache :Cache) {

    }

    async get(key): Promise<any> {
        return await this.cache.get(key);
    }

    async set(key, value,ttl=5000) {
        await this.cache.set(key, value, ttl);
    }

    async reset() {
        await this.cache.reset();
    }

    async del(key) {
        await this.cache.del(key);
    }
}
