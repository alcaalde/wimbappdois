import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function Config() {

  return (
    <View style={styles.container}>

    <Text style={styles.titulo}> WIMB </Text>
    <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>

    <View style={styles.conteudo}>
      <Text style={styles.tituloConteudo}>Informações</Text>
      <Text>WIMB é o seu parceiro digital que revoluciona a
       mobilidade urbana. Com tecnologia de ponta, 
       o app oferece informações sobre ônibus, rotas, horários e notícias.</Text>

       <View style={styles.line}/>

       <Text style={styles.tituloConteudo}>Versão</Text>
      <Text>1.0.0</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex'
  },

  titulo: {
    fontSize: 60,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
  },

  subtitulo:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: 8,
    marginBottom: 60
  },

  conteudo: {
    marginLeft: 30,
    marginRight:30
  },

  tituloConteudo: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },
  line: {
    borderBottomColor:  '#545454',
    borderBottomWidth: 1,
    marginVertical: 17,
    marginBottom: 30,
    marginTop: 30
   },
});