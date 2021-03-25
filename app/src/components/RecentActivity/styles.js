import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    width: "85%",
    padding: 10,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "black",
    justifyContent: "space-between",

    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 8,
    },
  },
  highlightedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  textContainer: {
    fontSize: 15,
    flex: 5,
  },
  icon: {
    flex: 1,
    height: 40,
    resizeMode: "contain",
  },
});
export default styles;
