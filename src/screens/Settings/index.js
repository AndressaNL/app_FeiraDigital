import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';
import {AuthContext} from '../../contexts/AuthContext';

export function Settings() {

  const navigation = useNavigation();

  const {signOut} = useContext(AuthContext);

  const handleSignClickPr = () => {
    navigation.reset({
      routes: [{name: "Products"}],
    });
  };

  const settingsOptions = [

    {title: 'Dados Pessoais', subTitle: null, onPress: () => {}},
    {title: 'Alterar Senha', subTitle: null, onPress: () => {}},
    {title: 'Desativar minha conta', subTitle: null, onPress: () => {}},
    {title: 'Preciso de ajuda?', subTitle: null, onPress: () => {}},
    {title: 'Sobre OFairta', subTitle: null, onPress: () => {}},
  ];

  async function handleSignOut() {
    await signOut();
  }

  return (
    <>
      <SettingsComponent settingsOptions={settingsOptions} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={handleSignClickPr}
          style={{
            backgroundColor: '#019972',
            height: 50,
            borderRadius: 10,
            width: 250,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Cadastrar produtos
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={handleSignOut}
          style={{
            backgroundColor: '#c3163a',
            height: 50,
            borderRadius: 10,
            width: 250,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Encerrar sessão
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
