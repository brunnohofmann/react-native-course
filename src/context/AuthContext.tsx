import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {signInService, User} from '../services/auth';
import {api} from '../services/api';

type AuthProviderProps = {
  children: React.ReactNode;
};

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
    async function loadStorageData(): Promise<void> {
      const [jwt, user] = await AsyncStorage.multiGet([
        '@Fakitter:jwt',
        '@Fakitter:user',
      ]);

      if (jwt[1] && user[1]) {
        setData({jwt: jwt[1], user: JSON.parse(user[1])});
        api.defaults.headers.common.Authorization = `Bearer ${jwt[1]}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({email, password}: SignInCredentials) => {
    const {jwt, user} = await signInService(email, password);

    await AsyncStorage.multiSet([
      ['@Fakitter:jwt', jwt],
      ['@Fakitter:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.common.Authorization = `Bearer ${jwt}`;

    setData({jwt, user});
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Fakitter:jwt', '@Fakitter:user']);
    api.defaults.headers.common.Authorization = false;

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{user: data.user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => useContext(AuthContext);

export {AuthProvider, useAuth};
