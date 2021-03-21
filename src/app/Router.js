import * as React from 'react';
import firebase from 'firebase';

import LoggedOutNavigation from '../navigation/LoggedOutNavigation';
import config from "../../config"

const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.AUTHDOMAIN,
  projectId: config.PROJECTID,
  storageBucket: config.STORAGEBUCKET,
  messagingSenderId: config.MESSAGINGSENDERID,
  appId: config.APPID,
  measurementId: config.MEASUREMENTID
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig) 
}




const AuthRouter = () => {

  firebase.auth().onAuthStateChanged(function(user){
    if (user){
      console.log("user is logged in")
    }else{
      console.log("user not signed in")
    }
  
  })
  
  return (
    <LoggedOutNavigation />
  )
}

export const AuthContext = React.createContext(null);
export default AuthRouter;