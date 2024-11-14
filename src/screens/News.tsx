import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';

export default function News() {
  const [showWebView, setShowWebView] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {showWebView ? (
        <WebView
          source={{ uri: 'https://guarulhosweb.com.br/onibus-e-incendiado-na-entrada-do-jardim-fortaleza-em-guarulhos/' }}
          style={{ height: 500 }}
        />
      ) : (
        <>
          <View style={styles.head}>
            <Text style={styles.titulo}> WIMB </Text>
            <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
          </View>

          <TouchableOpacity style={styles.imageContainer} onPress={() => setShowWebView(true)}>
            <Image
              source={require('../../assets/dutraObras.jpg')}
              style={styles.imagePrincipal}
            />
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
              style={styles.gradientPrincipal}
            />
            <View style={styles.textOverlay}>
              <Text style={styles.tituloNoticiaPrincipal}>Ônibus é incendiado na entrada do Jardim Fortaleza em Guarulhos</Text>
              <Text style={styles.subtituloNoticiaPrincipal}>Fonte: Redação Guarulhos Web     Data: 12 de novembro de 2024</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
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
  subtitulo: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: 8,
    marginBottom: 40,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20, // Espaçamento entre as imagens
  },
  imagePrincipal: {
    width: '100%',
    height: '100%',
  },
  gradientPrincipal: {
    ...StyleSheet.absoluteFillObject, // Para cobrir toda a área da imagem
  },
  textOverlay: {
    position: 'absolute', // Para sobrepor a imagem
    bottom: 10, // Posição no rodapé da imagem
    left: 10,
    right: 10,
    padding: 10,
  },
  tituloNoticiaPrincipal: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 5,
  },
  subtituloNoticiaPrincipal: {
    color: 'white',
    fontWeight: '200',
    fontSize: 8,
  },
});
