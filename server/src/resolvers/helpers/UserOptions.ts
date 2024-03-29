import { Field, InputType } from "type-graphql";

@InputType()
export class UserOptions {
    @Field()
    username: string;
    
    @Field()
    email: string;

    @Field()
    firstName: string;
    
    @Field()
    lastName: string;
}