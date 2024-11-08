import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StackNavigationProp } from '@react-navigation/stack';
import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location';

export default function Mapa() {

  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.454855496866678,
          longitude: -46.50189870636914,
          latitudeDelta: 0.009,
          longitudeDelta: 0.004,
        }}
        showsUserLocation={true}
        showsMyLocationButton
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
});
