import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const horarios = [
  '05:00', '06:00', '07:00', '08:00',
  '09:00', '10:00', '12:00', '14:00',
  '16:00', '17:00', '18:00', '18:30',
  '19:00', '19:30', '20:00', '21:00'
];

const HorarioTela = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titulo}>Linha 813</Text>
         <Text style={styles.subtitulo}> Local de partida: Terminal CECAP</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
        {horarios.map((horario, index) => (
          <View key={index} style={styles.horarioContainer}>
            <Text style={styles.horarioText}>{horario}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBCB4A',
    paddingTop: 50, 
  },
  headerContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'left'
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: '400',
    color: '#333',
  },
  horarioContainer: {
    padding: 15,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#545454',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  horarioText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default HorarioTela;
