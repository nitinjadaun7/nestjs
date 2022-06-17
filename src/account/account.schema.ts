import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type AccountDocument = Account & Document;


@ObjectType()
@Schema()

export class Account {

    @Field()
    @Prop({type: mongoose.Types.ObjectId})
    _id : string

    @Field()
    @Prop({nullable:true})
    account_id : number

    @Field()
    @Prop()
    limit : number

    @Field(type=> [String])
    @Prop([String])
    products : [String]

}

export const AccountSchema = SchemaFactory.createForClass(Account);