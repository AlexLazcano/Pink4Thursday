import { useQuery } from "@apollo/client";
import React from "react";
import { FlatList } from "react-native";
import gql_users from "../../graphql/queries/users.graphql";
import Loading from "../Loading/Loading";
import { WeirdText } from "./styles";

const UserDisplay = ({ user }) => {
    const { username, email, firstName, lastName, createdDate, lastUpdated } = user;
    let text;

    if (username) {
        text = `Username ${username}`;
    } else {
        text = "Username not found.";
    }

    return (
        <WeirdText>{username}</WeirdText>
    )
}

export default () => {
    const { data, loading } = useQuery(gql_users);

    if (loading) {
        console.log("Executing gql query...");
        return <Loading />
    }

    return (
        <FlatList
        data={ data.users  }
        renderItem={({ item }) => <UserDisplay user={item} /> }
        keyExtractor={( user ) => user.id.toString()}
        />
    )
}