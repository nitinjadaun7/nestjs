import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }])],

  providers: [UserService,UserResolver],

  controllers: [UserController]
})
export class UserModule {}
