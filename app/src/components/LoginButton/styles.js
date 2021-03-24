import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E43090",
    borderRadius: 30,
    // width: 150,
    height: 40,
    marginTop: 20,

    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 8,
    },
    
  },
  text:{
      color: "white",
      fontSize: 20
  }
  
});
export default styles;