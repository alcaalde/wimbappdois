import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';

export default function News() {
  const [showWebView, setShowWebView] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {showWebView ? (
        <View style={{ flex: 1, width: '100%', height: 500 }}>
          <Button title="Voltar" onPress={() => setShowWebView(false)} />
          <WebView
            source={{ uri: 'https://www.guarulhoshoje.com.br/2024/11/14/emtu-amplia-linha-que-liga-aruja-ao-aeroporto-de-guarulhos-com-viagens-aos-domingos-e-feriados/' }}
            style={{ flex: 1 }}
          />
        </View>
      ) : (
        <>
          <View style={styles.head}>
            <Text style={styles.titulo}> WIMB </Text>
            <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
          </View>

          <TouchableOpacity style={styles.imageContainer} onPress={() => setShowWebView(true)}>
            <Image
              source={{uri: 'https://www.guarulhoshoje.com.br/wp-content/uploads/2024/11/unnamed-768x384.jpg' }}
              style={styles.imagePrincipal}
            />
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
              style={styles.gradientPrincipal}
            />
            <View style={styles.textOverlay}>
              <Text style={styles.tituloNoticiaPrincipal}>EMTU amplia linha que liga Arujá ao Aeroporto de Guarulhos com viagens aos domingos e feriados</Text>
              <Text style={styles.subtituloNoticiaPrincipal}>Fonte: Redação Guarulhos Hoje     Data: 14 de novembro de 2024</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer} onPress={() => setShowWebView(true)}>
            <Image
              source={{uri: 'https://guarulhostododia.com.br/wp-content/uploads/2024/11/transito-guarulhos-ayrton-senna-avenida-santos-dumont-bueno-drone.jpg' }}
              style={styles.imagePrincipal}
            />
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
              style={styles.gradientPrincipal}
            />
            <View style={styles.textOverlay}>
              <Text style={styles.tituloNoticiaPrincipal}>Trânsito caótico em Guarulhos prejudica moradores em diferentes bairros</Text>
              <Text style={styles.subtituloNoticiaPrincipal}>Fonte: Guarulhos Todo Dia     Data: 13 de novembro de 2024</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer} onPress={() => setShowWebView(true)}>
            <Image
              source={{uri: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/11/28/01spacidentedutracaminhaocarrosonibusmortesbetomartinsfut.jpg' }}
              style={styles.imagePrincipal}
            />
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
              style={styles.gradientPrincipal}
            />
            <View style={styles.textOverlay}>
              <Text style={styles.tituloNoticiaPrincipal}>Acidente com ônibus, caminhão e 2 carros mata 3 pessoas na Via Dutra</Text>
              <Text style={styles.subtituloNoticiaPrincipal}>Fonte: Terra    Data: 13 de novembro de 2024</Text>
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
    marginBottom: 2, // Espaçamento entre as imagens
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
