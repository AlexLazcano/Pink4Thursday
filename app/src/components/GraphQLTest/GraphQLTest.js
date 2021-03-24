import React from "react";
import { FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";
import Loading from "../Loading/Loading";
import { WeirdText } from "./styles";

const USERS_QUERY = gql`
  query Users {
    users {
      id
      username
      email
      firstName
      lastName
      createdDate
      lastUpdated
    }
  }
`  

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
    const { data, loading } = useQuery(USERS_QUERY);

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