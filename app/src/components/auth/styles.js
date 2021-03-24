import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "60%",
    height: 40,
    justifyContent: "space-between",
    backgroundColor: "white",
    marginTop:20,
    borderRadius: 30,
    paddingLeft: 10,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      
      height: 8
    }
    
  },
});
export default styles;
