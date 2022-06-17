import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RedisService } from 'src/redis/redis.service';
import { Account, AccountDocument } from './account.schema';

@Injectable()
export class AccountService {
    constructor(
        @InjectModel (Account.name) private accountModel : Model<AccountDocument>,
        private redisCache:  RedisService
        ){}

    async getAccounts (): Promise<Account[]> {
        return this.accountModel.find().lean();
    }
}
