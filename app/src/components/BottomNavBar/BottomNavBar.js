import * as React from "react";
import { Alert, Button, FlatList, SafeAreaView, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import firebase from "firebase";

import * as Styles from "./styles";
import RecentActivity from "../RecentActivity/RecentActivity";
import ActiveDiscussion from "../ActiveDiscussion/ActiveDiscussion";
import ProfileComponent from "../ProfileComponent/ProfileComponent";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../GlobalStyles";

onLogout = () => {
  firebase.auth().signOut();
};

const Posts = [
  {
    id: 1,
    title: "Post 1",
    time: "30 mins ago",
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    author: "Alexis lazcano",
  },
  {
    id: 2,
    title: "Post 2",
    time: "30 mins ago",
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    author: "Alex lazcano",
  },
  {
    id: 3,
    title: "Post 3",
    time: "30 mins ago",
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    author: "Alexis lazcano",
  },
  {
    id: 4,
    title: "Post 4",
    time: "30 mins ago",
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    author: "Alex lazcano",
  },
  {
    id: 5,
    title: "Post 5",
    time: "30 mins ago",
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    author: "Alexis lazcano",
  },
  {
    id: 6,
    title: "Post 6",
    time: "30 mins ago",
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    author: "Alex lazcano",
  },
  {
    id: 7,
    title: "Post 7",
    time: "30 mins ago",
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    author: "Alexis lazcano",
  },
  {
    id: 8,
    title: "Post 8",
    time: "30 mins ago",
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    author: "Alex lazcano",
  },
];

const handlePress = (num) => {
  Alert.alert(
    `Pressed Id ${num}`,
      "My Alert Msg",
      [
        
        { text: "OK",  }
      ]
    );
}

const renderPosts = ({ item }) => (
  <ActiveDiscussion
    title={item.title}
    time={item.time}
    text={item.text}
    author={item.author}
    pressFunction={() => handlePress(item.id)}
  ></ActiveDiscussion>
);


const CommunityRoute = () => {
  return (
    <LinearGradient colors={[colors.Back1, colors.Back2]} style={{ flex: 1 }}>
      <SafeAreaView style={Styles.styles.PostView}>
        <Styles.TempPageText>CommunityRoute</Styles.TempPageText>
        <RecentActivity User="Alex" Reaction="Respect"></RecentActivity>

        <FlatList
          style={Styles.styles.FlatListStyle}
          bounces={true}
          data={Posts}
          renderItem={renderPosts}
          keyExtractor={(item) => item.id}
        
        ></FlatList>
      </SafeAreaView>
    </LinearGradient>
  );
};

const ProfileRoute = () => {
  return (
    <LinearGradient colors={[colors.Back1, colors.Back2]} style={{ flex: 1 }}>
      <Styles.CenteredView>
        {/* <Styles.TempPageText>ProfileRoute</Styles.TempPageText> */}
        <ProfileComponent isPro={true} />
      </Styles.CenteredView>
    </LinearGradient>
  );
};
const SettingsRoute = () => {
  return (
    <LinearGradient colors={[colors.Back1, colors.Back2]} style={{ flex: 1 }}>
      <Styles.CenteredView>
        <Styles.TempPageText>SettingsRoute</Styles.TempPageText>
        <Button title="Logout" onPress={onLogout} />
      </Styles.CenteredView>
    </LinearGradient>
  );
};

const BottomNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "community", title: "Community", color: "#E43090" },
    { key: "profile", title: "Profile" },
    { key: "settings", title: "Settings" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    community: CommunityRoute,
    profile: ProfileRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={Styles.ActiveIconColor}
      inactiveColor={Styles.InactiveIconColor}
      barStyle={{ backgroundColor: Styles.BackgroundColor }}
    />
  );
};

export default BottomNavBar;
