import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
  
         
          <View style={styles.fundoPreto}>
          <Text style={styles.sectionTitle1}>O QUE É O WIMB?</Text>
          <Text style={styles.text1}>
            O <Text style={styles.highlight}>WIMB</Text> é o seu parceiro digital que revoluciona a mobilidade urbana. Com tecnologia de ponta, o app oferece informações sobre ônibus, rotas, horários e notícias.
          </Text>
          </View>
          
          <View style={styles.backgroundAmarelo}>
          <View style={styles.fundoAmarelo}>
            <Text style={styles.sectionTitle2}>DIFERENCIAL</Text>
            <Text style={styles.text2}>
              O <Text style={styles.highlight}>WIMB</Text> é o seu parceiro digital que revoluciona a mobilidade urbana. Com tecnologia de ponta, o app oferece informações sobre ônibus, rotas, horários e notícias.
            </Text>
          </View>
          </View>
          
          

          {/* Seções interativas com ícones neon */}
          <Text style={styles.sectionTitle}>Nossa Missão</Text>
          <View style={styles.row}>
            <Feather name="target" size={28} color="#FFD700" />
            <Text style={styles.text}>Revolucionar o transporte público com soluções inteligentes e acessíveis.</Text>
          </View>

          <Text style={styles.sectionTitle}>Nossos Valores</Text>
          <View style={styles.row}>
            <Ionicons name="speedometer" size={28} color="#FFD700" />
            <Text style={styles.text}>Eficiência e velocidade.</Text>
          </View>
          <View style={styles.row}>
            
            <Text style={styles.text}>Segurança em primeiro lugar.</Text>
          </View>
          <View style={styles.row}>
            <Feather name="users" size={28} color="#FFD700" />
            <Text style={styles.text}>Foco total no usuário.</Text>
          </View>

          {/* Botão de contato interativo */}
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Entre em contato</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>

          {/* Rodapé */}
          <Text style={styles.footer}>© 2024 WIMB. Todos os direitos reservados.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },

  fundoPreto: {
    backgroundColor: 'black',
    marginLeft: 25,
    marginRight: 100,
    marginTop: 30
  },

  fundoAmarelo: {
    backgroundColor: '#EBCB4A',
    marginLeft: 100,
    marginRight: 25,
    marginTop: 30,
    textAlign: 'right'
  },

  backgroundAmarelo: {
    width: '100%',
    backgroundColor: '#EBCB4A'
  },

  title: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
 
  sectionTitle1: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'left'
  },

  sectionTitle2: {
    fontSize: 24,
    color: 'black',
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'right'
  },

  text1: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 20,
    flex: 1,
  },

  text2: {
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
    textAlign: 'right',
    marginBottom: 20,
    flex: 1,
  },

  highlight: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10,
  },
  
});
