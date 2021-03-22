import * as React from 'react';
import firebase from 'firebase';
import { useState, useEffect } from 'react';

import LoggedOutNavigation from '../navigation/LoggedOutNavigation';
import LoggedInNavigation from '../navigation/LoggedInNavigation';
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

function AuthRouter(){
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  function onAuthStateChanged(user){
    setUser(user)
    if (initializing) setInitializing(false);

  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    console.log("user is not logged in")
    return (
      <LoggedOutNavigation/>
    );
  }else{
    console.log("user is logged in")
    return (
      <LoggedInNavigation/>
    );
  }
}

export const AuthContext = React.createContext(null);
export default AuthRouter;