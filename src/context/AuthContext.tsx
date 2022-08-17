import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {apiConn} from '../services/api';

type AuthProviderProps = {
  children: React.ReactNode;
};

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

interface AuthState {
  jwt: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (signInCredentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log({data});

    async function loadStorageData(): Promise<void> {
      const [jwt, user] = await AsyncStorage.multiGet([
        '@Fakitter:jwt',
        '@Fakitter: user',
      ]);

      if (jwt[1] && user[1]) {
        setData({jwt: jwt[1], user: JSON.parse(user[1])});
      }

      setLoading(false);
    }

    loadStorageData();
  }, [data]);

  const signIn = useCallback(async ({email, password}: SignInCredentials) => {
    const response = await apiConn().post<AuthState>('auth/local', {
      identifier: email,
      password,
    });

    const {jwt, user} = response.data;

    await AsyncStorage.multiSet([
      ['@Fakitter:jwt', jwt],
      ['@Fakitter:user', JSON.stringify(user)],
    ]);

    setData({jwt, user});
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Fakitter:jwt', '@Fakitter:user']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{user: data.user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
};

export {AuthProvider, useAuth};
