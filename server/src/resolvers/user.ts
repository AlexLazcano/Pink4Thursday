import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "../entities/User";
import { UserOptions } from "./helpers/UserOptions";


@Resolver(User)
export class UserResolver {
    @Query(() => [User], { nullable: true })
    users() {
        return User.find();
    }

    @Mutation(() => User)
    async createUser(
        @Arg("options") options: UserOptions
    ): Promise<User> {
        let user;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({
                    username: options.username,
                    email: options.email,
                    firstName: options.firstName,
                    lastName: options.lastName
                })
                .returning("*")
                .execute();
            user = result.raw[0];
        } catch (error) {
            console.log(error);
        }
        return user;
    }

    @Mutation(() => User)
    async updateFirstName(
        @Arg("id") id: string,
        @Arg("firstName") firstName: string
        ): Promise<User | undefined> {        
        await User.update(
            { id: id },
            { firstName: firstName }
        );

        const updatedUser = await User.findOne(id);
        return updatedUser;
    }
}