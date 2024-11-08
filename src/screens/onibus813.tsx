import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';


export default function Linha813() {

  
  const [routeCoordinates, setRouteCoordinates] = useState([
    { latitude: -23.384312181770227, longitude: -46.399131662317785 },
    { latitude: -23.384070915227518, longitude: -46.399067289299445,},
    { latitude: -23.383736095624084, longitude: -46.39907265371763},
    { latitude: -23.38302706307164,  longitude: -46.399346239044924},
    { latitude: -23.382490362305848, longitude: -46.39979148575514},
    { latitude: -23.38235606567606,  longitude: -46.3999239362358},
    { latitude: -23.382385608923947, longitude: -46.400020495763314},
    { latitude: -23.383904615385593, longitude: -46.40013583075038 },
    { latitude: -23.384197582219986, longitude: -46.40005268226745},
    { latitude: -23.38497307953448,  longitude: -46.39961548218511},
    { latitude: -23.38567963979277,  longitude: -46.40006072889127},
    { latitude: -23.38573872480327,  longitude:  -46.400358454097386},
    { latitude: -23.385376828720833,  longitude: -46.401597634700494},
    { latitude: -23.385179878056714,  longitude: -46.40176929607728},
    { latitude: -23.384859832601304,  longitude: -46.401833669048166},
    { latitude: -23.38454717206073,   longitude: -46.40175588498042},
    { latitude: -23.384214815560295,  longitude: -46.40188731324486},
    { latitude: -23.38381598665412,  longitude: -46.402222589362765},
    { latitude: -23.383200507598286,  longitude: -46.40216626297396},
    { latitude: -23.383326065556222,  longitude: -46.40242643725642},
    { latitude: -23.384168363857505,   longitude: -46.40341692915007},
    { latitude: -23.384525339456378,   longitude: -46.402842936382754},
    { latitude: -23.3847641432788,   longitude: -46.40266322837321},
    { latitude: -23.385391924475496,   longitude: -46.40275710569038},
    { latitude: -23.385810443624877,    longitude: -46.402550575592514},
    { latitude: -23.38598031279071,    longitude: -46.402370867585205},
    { latitude: -23.38655638919019,    longitude: -46.40032434209696},
    { latitude: -23.38656869848739, longitude: -46.3996081922679},
    { latitude: -23.38527235582929, longitude: -46.39875510688698},
    { latitude:-23.38577211722005, longitude: -46.39856735225015},
    { latitude: -23.385892748997282,  longitude: -46.3977009987245},
    { latitude: -23.385796392266222, longitude: -46.39674544999946},
    { latitude: -23.387558595262423,  longitude:-46.39638155913936},
    { latitude:-23.389006278200366, longitude: -46.39660267298627},
    { latitude: -23.390426886274973,  longitude:-46.39708175299489},
    { latitude: -23.394925447023656,  longitude: -46.3977439985365},
    { latitude: -23.396021297061527,  longitude: -46.397427068673956},
  ]);

  return (
    <View style={styles.container}>
      <MapView  
        style={styles.map}
        initialRegion={{
          latitude: -23.384285619271317,
          longitude:  -46.39912695514304,
          latitudeDelta: 0.009,
          longitudeDelta: 0.004,
        }}
      >
         <Polyline
          coordinates={routeCoordinates}
          strokeColor="#000000"
          strokeWidth={5} 
        />
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
