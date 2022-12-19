import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../Services/Api';

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreData = async () => {
      const storageUser = await AsyncStorage.getItem('@storage:user');
      const storageToken = await AsyncStorage.getItem('@storage:token');
      const userParse = await JSON.parse(storageUser);

      if (userParse !== null && storageToken !== null) {
        api.defaults.headers.common['Authorization'] = `Bearer ${storageToken}`;
        setUser(userParse);
      }
    };
    loadingStoreData();
  }, []);

  async function signIn({email, password}) {
    try {
      const response = await api.post('/authBuyer', {email, password});
      const {user, token, error} = response.data;

      if (error) {
        console.log(error);
        Alert.alert(
          'Auntenticação',
          'Ops, Algo deu errado tente novamente por favor :-)',
        );
        return;
      }

      setUser(user);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const userStringiFy = JSON.stringify(user);

      await AsyncStorage.setItem('@storage:token', token);
      await AsyncStorage.setItem('@storage:user', userStringiFy);
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  }

  async function signInProducer({email, password}) {
    try {
      const response = await api.post('/authProducer', {email, password});
      const {user, token, error} = response.data;

      if (error) {
        console.log(error);
        Alert.alert(
          'Auntenticação',
          'Ops, Algo deu errado tente novamente por favor :-)',
        );
        return;
      }

      setUser(user);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const userStringiFy = JSON.stringify(user);

      await AsyncStorage.setItem('@storage:token', token);
      await AsyncStorage.setItem('@storage:user', userStringiFy);
      console.log(token);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    try {
      setUser(null);
      AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthContext.Provider value={{user, signIn, signInProducer, signOut, signed: !!user}}>
      {children}
    </AuthContext.Provider>
  );
}
