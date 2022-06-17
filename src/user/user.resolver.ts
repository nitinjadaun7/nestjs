import { Query, Resolver } from '@nestjs/graphql';
import { Customer } from './user.schema';
import { UserService } from './user.service';

@Resolver(()=> Customer)
export class UserResolver {
    constructor(private userService: UserService) {
    }

    @Query(() => String)
    sayHello(): string {
        return 'Hello Nitin!';
    }

    @Query(()=>[Customer])
    getCustomer(): Promise<Customer[]>  {
        return this.userService.find();
    }
}
