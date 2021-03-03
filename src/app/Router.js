import * as React from 'react';

import LoggedOutNavigation from '../navigation/LoggedOutNavigation';

export const AuthContext = React.createContext(null);

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

export default AuthRouter;