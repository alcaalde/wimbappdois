import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; 
import * as Location from 'expo-location';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'; 

export default function Mapa() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const mapRef = useRef<MapView>(null);
  const navigation = useNavigation();

  // pede a localização do usuário e, caso permitida, pega a localização dele
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let locationatual = await Location.getCurrentPositionAsync({});
      setLocation(locationatual);
    })();
  }, []);

  // se a localização e a função mapRef forem positivas, o botão de centralizar vai usar essa função para centralizar a localização atual do usuário
  const goToUserLocation = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.004,
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* se a localização for real, exibe o mapa */}
      {location && (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.004,
          }}
          showsUserLocation={true}
          showsMyLocationButton={false} 
        >

          {/* marker dos pontos de ônibus */}
          <Marker
            coordinate={{ latitude: -23.45341876981034, longitude: -46.50272301346377 }}
            title="R. Guilherme Lino dos Santos, 632"
            description="Ônibus: 233, 356A"
          >
            <Image
              source={require('../../assets/pontoteste.png')}
              style={{ width: 50, height: 50 }}
            />
          </Marker>

          <Marker
            coordinate={{ latitude: -23.45521781221215, longitude: -46.50225316194484 }}
            title="R. Guilherme Lino dos Santos, 799-847"
            description="Ônibus: 233"
          >
            <Image
              source={require('../../assets/pontoteste.png')}
              style={{ width: 50, height: 50 }}
            />
          </Marker>

        </MapView>
      )}

      {/* botão para centralizar a localização do usuário */}
      <TouchableOpacity style={styles.buttoncentralizar} onPress={goToUserLocation}>
      <FontAwesome6 name="location-crosshairs" size={24} color="black" />
      </TouchableOpacity>

  {/* botão para mandar para a tela de pesquisa */}
      <TouchableOpacity style={styles.test}
      onPress={() => navigation.navigate('telapesquisa')}>
      <FontAwesome5 name="search-location" size={20} color="black" style={styles.icon} />
      <Text style={styles.text}> Pesquisar rota </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttoncentralizar: {
    position: 'absolute',
    top: 40,
    right: 20, 
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
    test: {
    position: 'absolute',
    padding: 10,
    bottom: 20,
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#FFFFFF', 
    borderRadius: 30,
    alignItems: 'center',
    height: 50,
    borderWidth: 0,
    borderColor: 'black',
    elevation: 10
  },
  icon: {
    marginLeft: 10, 

  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400', 
    marginLeft: 10
  },
});
