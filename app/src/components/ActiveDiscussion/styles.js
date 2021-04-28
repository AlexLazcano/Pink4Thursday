import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  ActiveDiscussion: {
    // backgroundColor: "pink",
    
    marginBottom: 20,
    width: "85%",
    display: "flex",
    flexDirection: "row",
    height: 150,
    paddingTop: 15,
    paddingLeft: 15,
    borderRadius: 15,
    alignSelf:"center",

    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 8,
    },
  },
  profilePicture: {
    resizeMode: "contain",
    height: 60,
    width: 60,

    borderRadius: 60 / 2,
  },
  textContainer: {
    flex: 3,
    padding: 5,
    marginLeft: 5,
    justifyContent: "space-between",
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  author: {
    color: "white",
    flexShrink: 1,
    paddingLeft:10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  time: {
    color: "white",
  },
});

export default styles;
