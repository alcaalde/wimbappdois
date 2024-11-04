import { StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function News() {
  return (
    <View style={styles.container}>

     <View style={styles.head}>
      <Text style={styles.titulo}> WIMB </Text>
         <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
      </View>
      <Image
        source={require('../../assets/dutraObras.jpg')}
        style={styles.imagePrincipal}
      />
      
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        style={styles.gradient}
      />

    <View style={styles.a}>
        <View style={styles.barra}/>
        <View style={styles.texto}>

        <Text style={styles.tituloNoticiaPrincipal}> OBRAS NA DUTRA: </Text>
        <Text style={styles.subtituloNoticiaPrincipal}> Via será interditada na altura da Hélio Smidt 

      </Text>
        </View>
    </View>
    <View style={styles.conteudo}>
    <Image
        source={require('../../assets/dutraObras.jpg')}
        style={styles.image}
      />
      <View style={styles.barraSuperior}/>
      <Text style={styles.tituloNoticia}></Text>
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

  imagePrincipal: {
    marginTop: 90,
    width: '110%',
    height: '30%',
    position: 'absolute',
  },
  gradient: {
    marginTop: 90,
    position: 'absolute', 
    width: '110%',
    height: '30%',
  },
  a: {
    marginLeft: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%', 
    flexDirection: 'row',
    marginTop: '30%',
  }, 
  barra:{
    width: 4,
    height: 40,
    backgroundColor: '#EBCB4A',
    marginTop: 8,
    marginRight: 10
  },
  texto:{
    flexDirection: 'column',
  },
  tituloNoticiaPrincipal: {
    color:'white',
    fontWeight: '600',
    fontSize: 25,
    marginLeft: -4
  },
  subtituloNoticiaPrincipal:{
    color:'white',
    fontWeight: '400',
    fontSize: 15,
    marginTop: -5
 },
 conteudo:{
  marginTop: 13,
  width: '100%',
  height: '100%',
  flexDirection: 'row',
 },
 image:{
    width: '30%',
    height: '15%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
 },
 barraSuperior:{
  width: '100%',
  height: 20,
  backgroundColor: '#EBCB4A',
  marginRight: 10
},
tituloNoticia: {
  color:'black',
  fontWeight: '600',
  fontSize: 25,
  marginTop: 500,
  marginLeft: 100
},
});