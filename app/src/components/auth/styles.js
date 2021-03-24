import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 250,
    height: 150,
    resizeMode: "contain",
    display: "flex",
    marginBottom: 50,
  },

  input: {
    width: "60%",
    height: 40,
    width: 250,
    justifyContent: "space-between",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 30,
    paddingLeft: 10,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 8,
    },
  },

  inputView: {
    
    display: "flex",
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  registerView: {
    
    display: "flex",
    flex:1,
    width: 350,
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems: "baseline"
  },
});
export default styles;
