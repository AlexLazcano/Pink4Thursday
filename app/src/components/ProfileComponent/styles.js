import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  profileContainer: {
    // backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
    top: 30,
    width: "90%",
    height: "70%",
    marginTop: 120,
    borderRadius: 20,
    
  },
  

  profilePicture: {
    resizeMode: "contain",
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    marginTop: -100,
  },

  isPro: {
   
    backgroundColor: "#F6D365",
    textAlign: "center",
    color: "black",
    width: 60,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    marginTop: 10,
  },
  name: {
    marginTop: 20,
    width: "100%",
    // backgroundColor: 'red',
    textAlign:'center',
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.0,
     

    
  },
  email: {
      fontWeight:'bold',
      fontSize: 20,
  },

  bio: {
    marginTop: 20,
    width: "85%",
    textAlign: "center",
  },
});

export default styles;
