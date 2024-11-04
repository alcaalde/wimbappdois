import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';

type RootStackParamList = {
  infoOnibus: undefined;
  Search: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Search'>;
const Stack = createStackNavigator();

export default function Search({ navigation }:Props) {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>

     <View style={styles.head}>
      <Text style={styles.titulo}> WIMB </Text>
         <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
      </View>

     <TextInput style={styles.campo}
      placeholder={isFocused ? '' : '  Pesquisar rota'}
      value={text}
      onChangeText={setText}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}/>

     <View style={styles.conteudo}>
        <View style={styles.local}>
        <Text style={styles.textoLocal}>Avenida Odair Santanelli, 800 - Cecap</Text>
        <Text style={styles.alterarLocal}>Alterar local</Text>
        <View style={styles.line}/>
        </View>
        <TouchableOpacity style={styles.onibus}
        onPress={() => navigation.navigate('infoOnibus')}>
          <Text style={styles.onibusTexto}>351 - Shopping Internacional</Text>
          <View style={styles.horario}>
            <Text style={styles.horarioTexto}>12 minutos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.onibus}>
          <Text style={styles.onibusTexto}>433 - Terminal São João</Text>
          <View style={styles.horario}>
            <Text style={styles.horarioTexto}>15 minutos</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.onibus}>
          <Text style={styles.onibusTexto}>330 - Terminal Taboão</Text>
          <View style={styles.horario}>
            <Text style={styles.horarioTexto}>20 minutos</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  head: {
    marginTop: 0,
  },
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 0,
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
  campo: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    padding: 12,
    width: '75%',
    alignSelf: 'center',
    elevation: 7,
    paddingVertical: 10,
    borderWidth: 0.8, 
  },

 conteudo: {
  backgroundColor: '#DFDFDF',
  width: '100%',
  height: '55%',
  marginTop: 70,
  alignItems: 'center',
 },
 local: {
  width: '70%',
  top: 0,
 },
 textoLocal: {
  fontSize: 16,
  fontWeight: 'bold', 
  marginBottom: 10, 
  marginTop: 20
 },
 alterarLocal: {
  fontSize: 12,
  textDecorationLine: 'underline',
 },
 line: {
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  marginVertical: 17,
  marginBottom: 35
 },
 onibus:{
  width: '85%',
  backgroundColor: '#EBCB4A',
  height: 50,
  borderRadius: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  marginBottom: 20,
  elevation: 5
 },
 onibusTexto: {
  fontWeight: '700',
  marginLeft: 7,
  flex: 1,
  fontSize: 12
 },
 horario:{
  backgroundColor: '#545454',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
  borderRadius: 20,
  width: '45%',
  marginRight: -25
 },
horarioTexto: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 12
}
});