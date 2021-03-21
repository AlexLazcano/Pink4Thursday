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

  /*
    Display the proper navigation stack based on user authentication (something like below):
        return user ? (
          <LoggedInNavigation />
        ) : (
          <LoggedOutNavigation />
        ) 
  */
  return (
    <LoggedOutNavigation />
  )
}

export const AuthContext = React.createContext(null);
export default AuthRouter;