import { Model, FilterQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Customer, CustomerDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Customer.name) private userModel: Model<CustomerDocument>
  ) {}

  async create(input): Promise<Customer> {
    return this.userModel.create(input);
  }

  async findOne(query: FilterQuery<Customer>): Promise<Customer> {
    return this.userModel.findOne(query).lean();
  }

  async find(): Promise<Customer[]> {
    return this.userModel.find().lean();
  }
}