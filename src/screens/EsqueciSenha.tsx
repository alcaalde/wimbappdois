import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

type RootStackParamList = {
  login: undefined;
  cadastro: undefined;
  home: undefined;
  senha: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'senha'>;
const Stack = createStackNavigator();

export default function Login({ navigation }:Props){
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const [text2, setText2] = useState('');
  const [isFocused2, setIsFocused2] = useState(false);
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.voltar} 
      onPress={() => navigation.navigate('login')}>
      <Feather name="arrow-left" style={styles.icon}/>
      </TouchableOpacity>
      
      <View></View>
      <Text style={styles.titulo}> WIMB </Text>
      <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>

      <View style={styles.caixaTextos}>
      <Text style={styles.tituloPagina}>Esqueceu a senha? </Text>
      <Text style={styles.subtituloPagina}> 
        Digite o email vinculado a sua conta para redefinir a senha. 
      </Text>
      </View>
   
       <TextInput style={styles.campo}
        placeholder={isFocused ? '' : 'Email'}
        value={text}
        onChangeText={setText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}/>

        <TouchableOpacity style={styles.enviar}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.textocadastrar}> Enviar </Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#EBCB4A',
    padding: 15,
  },

  voltar: {
    width: '100%',
  },

  icon: {
    fontSize: 30
  },

  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
  },

  subtitulo:{
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: 8,
    marginBottom: 40
  },

  caixaTextos:{
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    width: '80%'
  },

  tituloPagina:{
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 20,
    marginTop: 50,
  },

  subtituloPagina:{
    fontSize: 15,
    fontWeight:'light',
    marginBottom: 35
  },

  campo:{
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    margin: 15,
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    elevation: 5,
    paddingVertical: 10
  },

   enviar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 3,
    padding: 12,
    borderWidth: 0,
    width: '80%',
    backgroundColor:'#545454',
    marginBottom: 40,
    elevation: 5,
    paddingVertical: 15
  },

  textocadastrar:{
    fontSize: 15,
    color: 'white',
  },

  campoTitulo:{
    marginRight: 10, 
    textAlign: 'left'
  }
});
