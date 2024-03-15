import {useContext, createContext, useState} from 'react';

type AuthContextType = {
  loggedIn: boolean;
  updateLoggedIn: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  updateLoggedIn: () => {},
});

const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({children}: {children: React.ReactNode}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const updateLoggedIn = (value: boolean) => {
    setLoggedIn(value);
  };

  return (
    <AuthContext.Provider value={{loggedIn, updateLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContextProvider, useAuthContext};
