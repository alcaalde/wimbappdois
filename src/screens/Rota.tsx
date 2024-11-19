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
          <Marker
            coordinate={{ latitude: -23.454855496866678, longitude: -46.50189870636914 }}
            title="Ponto de ônibus 1"
            description="Teste básico"
          >
            <Image
              source={require('../../assets/pontoteste.png')}
              style={{ width: 50, height: 50 }}
            />
          </Marker>
        </MapView>
      )}
      <TouchableOpacity style={styles.buttoncentralizar} onPress={goToUserLocation}>
      <FontAwesome6 name="location-crosshairs" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.test}
      onPress={() => navigation.navigate('telapesquisa')}>
      <FontAwesome5 name="search-location" size={25} color="black" style={styles.icon} />
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
  buttonteste: {
    position: 'absolute',
    top: 93,
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
    borderWidth: 1,
    borderColor: 'black',
  },
  campo: {
    backgroundColor: 'white', 
    borderRadius: 15,
    fontSize: 15,
    color: 'black',
    padding: 12,
    width: '60%',
    height: 50,
    alignSelf: 'center',
    elevation: 7,
    paddingVertical: 10,
    borderWidth: 3,
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  icon: {
    marginRight: 5, 
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold', 
  },
});
