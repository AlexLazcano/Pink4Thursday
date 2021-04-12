import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#E43090",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    
    height: 40,
    marginTop: 20,

    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.2,
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