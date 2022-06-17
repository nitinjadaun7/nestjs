import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './account.schema';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  providers: [AccountService, AccountResolver],
  imports:[
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    RedisModule
]
})
export class AccountModule {}
