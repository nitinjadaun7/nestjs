import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@ObjectType()
@Schema()
export class Customer {
    @Field()
    @Prop()
    username: string;
        
    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    address: string;
    
    @Field()
    @Prop()
    birthdate: Date;
    
    @Field()
    @Prop()
    email: string;

    @Field({nullable:true})
    @Prop()
    active: boolean;
  
    @Field(type=>[Number])
    @Prop([Number])
    accounts: number[];
  
    // @Field(()=>{Object})
    // @Prop({Object})
    // tier_and_details: object{};
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

// export const UserSchema = new mongoose.Schema({
//     username: String,
//     name: String,
//     address: String,
//     birthdate: Date,
//     email: String,
//     active: Boolean,
//     accounts: Array,
//     tier_and_details: Object,
// });

// @ObjectType()
// export class Customer extends Document {
//   @Field()
//   username: string;

//   @Field()
//   name: string;

//   @Field()
//   address: string;

//   @Field()
//   birthdate: Date;

//   @Field()
//   email: string;

//   @Field()
//   active: boolean;

//   @Field()
//   accounts: number[];

//   @Field()
//   tier_and_details: object[];
// }