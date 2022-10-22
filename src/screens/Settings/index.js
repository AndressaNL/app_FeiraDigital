import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';
import {AuthContext} from '../../contexts/AuthContext';

export function Settings() {
  const {signOut} = useContext(AuthContext);

  const settingsOptions = [
    {title: 'Endereço de entrega', subTitle: null, onPress: () => {}},
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
            SAIR
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
