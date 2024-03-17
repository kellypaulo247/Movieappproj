import {useContext, createContext, useState} from 'react';
import {User} from '../interfaces/auth';

type AuthContextType = {
  loggedIn: boolean;
  splashScreen: boolean;
  userAccount?: User;
  updateLoggedIn?: (value: boolean) => void;
  updateSplashScreen?: (value: boolean) => void;
  updateUserAccount?: (value: User) => void;
};

const AuthContext = createContext<AuthContextType>({
  splashScreen: true,
  loggedIn: false,
});

const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({children}: {children: React.ReactNode}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [splashScreen, setSplashScreen] = useState<boolean>(false);
  const [userAccount, setUserAccount] = useState<User>();

  const updateLoggedIn = (value: boolean) => {
    setLoggedIn(value);
  };

  const updateSplashScreen = (value: boolean) => {
    setLoggedIn(value);
  };

  const updateUserAccount = (value: User) => {
    setUserAccount(value);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        updateLoggedIn,
        splashScreen,
        updateSplashScreen,
        userAccount,
        updateUserAccount,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContextProvider, useAuthContext};
