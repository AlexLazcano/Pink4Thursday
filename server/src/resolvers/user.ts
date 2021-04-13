import { SessionContext } from "src/types/SessionContext";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "../entities/User";
import { UserOptions } from "./helpers/UserOptions";

@Resolver(User)
export class UserResolver {

    /* Queries */

    @Query(() => [User], { nullable: true })
    users() {
        return User.find();
    }

    @Query(() => User, { nullable: true })
    async currentUser(
        @Ctx() { req }:SessionContext
    ) {
        if (!req.session.userId) {
            console.log("You are not logged in");
        }

        const user = await User.findOne({ where: { id: req.session.userId }});
        return user;
    }

    /* Mutations */

    @Mutation(() => User)
    async startSession(
        @Arg("email") email: string,
        @Ctx() { req }: SessionContext 
    ): Promise<User | undefined> {
        const user = await User.findOne({
            where: { email: email }
        });

        if (user) {
            req.session.userId = user.id;
        }

        return user;
    }

    @Mutation(() => User)
    async createUser(
        @Arg("options") options: UserOptions,
        @Ctx() { req }: SessionContext
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

        // Start user session
        req.session.userId = user.id;
        
        return user;
    }

    @Mutation(() => User, { nullable: true })
    async updateUser(
        @Arg("id") id: string,
        @Arg("options") options: UserOptions
        ): Promise<User | undefined> {        
        let updatedUser;
        
        try {
            const result = await getConnection()
            .createQueryBuilder()
            .update(User)
            .set({ 
                username: options.username, 
                email: options.email, 
                firstName: options.firstName, 
                lastName: options.lastName 
            })
            .where("id = :id", { id })
            .returning("*")
            .execute();
            updatedUser = result.raw[0];
        } catch (error) {
            console.log(error);
        }

        return updatedUser;
    }
}