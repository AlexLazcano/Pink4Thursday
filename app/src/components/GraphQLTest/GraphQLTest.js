import { useQuery } from "@apollo/client";
import React from "react";
import testQuery from "../../graphql/queries/test.graphql";
import Loading from "../Loading/Loading";
import { RedText } from "./styles";

const UserDisplay = ({ user }) => {
    const { username, email, firstName, lastName, createdDate, lastUpdated } = user;
    let text;

    if (username) {
        text = `Username ${username}`;
    } else {
        text = "Username not found.";
    }

    return (
        <RedText>{username}</RedText>
    )
}

export default () => {
    const { data, loading, error } = useQuery(testQuery);

    if (loading) {
        console.log("Executing gql query...");
        return <Loading />
    } else if (error) {
        console.log(error);
        return <Text>Whoops! An error occurred while fetching data.</Text>
    }

    return (
        <RedText>{ data.Test }</RedText>
    ) 
    
    // (
    //     <FlatList
    //     data={ data.users  }
    //     renderItem={({ item }) => <UserDisplay user={item} /> }
    //     keyExtractor={( user ) => user.id.toString()}
    //     />
    // )
}