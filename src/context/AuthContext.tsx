import React, {createContext} from 'react';
import {User} from '../services/auth';
import {ViewProps} from 'react-native';

type AuthContextType = {
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  user?: User;
};

const AuthContextProvider = createContext<AuthContextType>({
  isLoggedIn: false,
  setUser: () => {},
  user: undefined,
});

const AuthContext = ({children}: ViewProps) => {
  const [user, setUser] = React.useState<User>();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <AuthContextProvider.Provider value={{user, isLoggedIn, setUser}}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContextProvider);

export default AuthContext;
