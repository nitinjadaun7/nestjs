import { Query, Resolver } from '@nestjs/graphql';
import { Account } from './account.schema';
import { AccountService } from './account.service';

@Resolver()
export class AccountResolver {
    constructor(private accountService : AccountService){

    }

    @Query(()=>[Account])
    getAccounts(){
        return this.accountService.getAccounts();
    }
}
