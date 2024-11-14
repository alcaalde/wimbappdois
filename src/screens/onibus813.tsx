import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, Polyline, LatLng } from 'react-native-maps';


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
    { latitude: -23.395973447931105, longitude: -46.39739411677447},
    { latitude: -23.397713079225554, longitude: -46.39866622511261},
    { latitude: -23.400025716452706,  longitude: -46.39928502734522},
    { latitude: -23.400745845889624, longitude: -46.39995486480811},
    { latitude: -23.40116738324118, longitude: -46.40047797598115},
    { latitude: -23.401424988755117, longitude: -46.40082246380022},
    { latitude: -23.40161819256152, longitude: -46.402066447655415},
    { latitude: -23.402039727135566, longitude: -46.40334232856526},
    { latitude: -23.402449551141498,  longitude: -46.404056821837365},
    { latitude: -23.40280668244427, longitude:  -46.40447148313307},
    { latitude: -23.403064284760138, longitude: -46.40593874614964},
    { latitude: -23.40529486565958, longitude: -46.4071635917536}, 
    { latitude: -23.40688018024427, longitude: -46.40153934849552},
    { latitude: -23.40709711502058, longitude: -46.40066602596796},
    { latitude: -23.40804595511304,longitude:-46.40125181002296},
    { latitude: -23.40838634274455, longitude: -46.40140017594405},
    { latitude: -23.40903486835746, longitude: -46.40222009283167},
    { latitude: -23.409665475833087, longitude: -46.40181794310034},
    { latitude: -23.41008755068618,  longitude: -46.40253349749413},
    { latitude: -23.41065365984881, longitude: -46.40299421271957},
    { latitude: -23.41086147147534, longitude: -46.40321676159148},
    { latitude: -23.41330661539392, longitude: -46.404876560546526},
    { latitude: -23.41363126292457, longitude: -46.40493035392097},
    { latitude: -23.41394655608438, longitude: -46.404836649128704},
    { latitude: -23.41483510550068, longitude: -46.40433689023493},
    { latitude: -23.415121733070464, longitude: -46.404282229107785},
    { latitude: -23.41549793082238, longitude: -46.40432127276802},
    { latitude:-23.415856420132567, longitude: -46.404499297311915},
    { latitude: -23.41605845763395, longitude: -46.40464920163642},
    { latitude: -23.41698882993575, longitude: -46.4058186447995},
    { latitude: -23.41725957196801, longitude: -46.40597957734536},
    { latitude: -23.417918422805194, longitude: -46.40604523063321},
    { latitude: -23.418075944405473, longitude: -46.406286629444566},
    { latitude: -23.418258078522197, longitude: -46.40680161358353},
    { latitude: -23.418351606761608, longitude: -46.40724686028383},
    { latitude: -23.419188435359274, longitude: -46.40713420750172},
    { latitude: -23.421551216983808, longitude: -46.40695181727137},
    { latitude: -23.42235356865979, longitude: -46.40651729940367},
    { latitude: -23.42298855516791, longitude: -46.40648511288871},
    { latitude: -23.42339218841393, longitude: -46.40665140985277},
    { latitude:-23.423618616280887, longitude: -46.406705054034724},
    { latitude: -23.42381744455447, longitude: -46.40763487404015},
    { latitude: -23.424255531503103, longitude: -46.40767242495459},
    { latitude: -23.4223330889896, longitude: -46.413480321661034},
    { latitude: -23.421161906785088, longitude: -46.41783607326437},
    { latitude: -23.42473035852316, longitude: -46.41898782478609},
    { latitude: -23.425396851014522, longitude: -46.41914979573806},
    { latitude: -23.42937962773591, longitude: -46.419390522685205},
    { latitude: -23.429701320886846, longitude: -46.41932478513554},
    { latitude: -23.431012212331602, longitude: -46.418658644691156},
    { latitude: -23.431096655821154, longitude: -46.418592907149325},
    { latitude: -23.431112740287766, longitude: -46.41850087458792},
    { latitude: -23.430855388587158, longitude: -46.41791361919616},
    { latitude: -23.430770944951256, longitude: -46.417839116646455},
    { latitude: -23.43069052239071, longitude: -46.41756740146519},
    { latitude: -23.430787029457484,  longitude: -46.41732636380439},
    { latitude: -23.4309478744189, longitude: -46.417186123731014},
    { latitude: -23.431132845886463, longitude: -46.41730445131834},
    { latitude: -23.434427473336996, longitude: -46.42517221459192},
    { latitude: -23.434467683486695, longitude: -46.42559293487259},
    { latitude: -23.434580271840787, longitude: -46.42586026755093},
    { latitude: -23.434584292851664, longitude: -46.425965447621095},
    { latitude: -23.43453201970077, longitude: -46.42602680266202},
    { latitude: -23.434922534697414, longitude: -46.42690731888268},
    { latitude: -23.43577883245887, longitude: -46.42832683068207},
    { latitude: -23.438438102426964, longitude: -46.43477953787136},
    { latitude: -23.43861508673654, longitude: -46.43539842888522},
    { latitude: -23.4458283959223, longitude: -46.452552728997205},
    { latitude: -23.446081455425713, longitude: -46.45299026543649},
    { latitude: -23.45721447296504, longitude: -46.47952753714177},
    { latitude: -23.457259957080193, longitude: -46.47986000084698},
    { latitude: -23.45762124831201, longitude: -46.48077628104932},
    { latitude: -23.458734608951964, longitude: -46.48351708411073},
    { latitude: -23.459390823746, longitude: -46.48469056575404},
    { latitude: -23.46050796361312, longitude: -46.487590825872516},
    { latitude: -23.460537456086413, longitude: -46.488121303884405},
    { latitude: -23.46052270985059, longitude: -46.48831420497964},
    { latitude: -23.459062824350713, longitude: -46.4889813212673},
    { latitude: -23.45886935525778, longitude: -46.48918171510533},
    { latitude: -23.45886935525778, longitude: -46.48939872883747},
    { latitude: -23.459090551392265,  longitude: -46.49025874622037},
    { latitude: -23.459031565791125, longitude: -46.490572210473346},
    { latitude: -23.458817742771572, longitude: -46.490757074022945},
    { latitude: -23.458412215404007, longitude: -46.49085352457056},
    { latitude: -23.457674889726476, longitude: -46.49066866102097},
    { latitude: -23.457461064509843, longitude: -46.4904677223801},
    { latitude: -23.45741682476662, longitude: -46.490178370737254},
    { latitude: -23.457807608652317, longitude: -46.489889019094406},
    { latitude: -23.45796244723049, longitude: -46.489889019094406},
    { latitude: -23.45810991237423, longitude: -46.48995331945949},
    { latitude: -23.458308990057024, longitude: -46.49029893392177},
    { latitude: -23.458294243560935, longitude:-46.49135988987668},
    { latitude: -23.4580804193473, longitude: -46.49258159681314},
    { latitude: -23.45813940537186, longitude: -46.49396405466229},
    { latitude: -23.458685024854287, longitude: -46.49521791172874},
    { latitude: -23.459201149312207, longitude: -46.49594129083585},
    { latitude: -23.45947840919019, longitude: -46.49655176358727},
    { latitude: -23.460162899810634, longitude: -46.4972204788659},
    { latitude: -23.461112645452225, longitude: -46.497692547667086},
    { latitude: -23.461378376170114, longitude: -46.4976710899943},
    { latitude: -23.4621115933514, longitude: -46.497311673973556},
  ]);
  
const [routeCoordinates2, setRouteCoordinates2] = useState ([
  { latitude: -23.41483510550068, longitude: -46.40433689023493},
  { latitude: -23.415121733070464, longitude: -46.404282229107785},
  { latitude: -23.41549793082238, longitude: -46.40432127276802},
  { latitude:-23.415856420132567, longitude: -46.404499297311915},
  { latitude: -23.41605845763395, longitude: -46.40464920163642},
  { latitude: -23.41698882993575, longitude: -46.4058186447995},
  { latitude: -23.41725957196801, longitude: -46.40597957734536},
  { latitude: -23.417918422805194, longitude: -46.40604523063321},
  { latitude: -23.418075944405473, longitude: -46.406286629444566},
  { latitude: -23.418258078522197, longitude: -46.40680161358353},
  { latitude: -23.418351606761608, longitude: -46.40724686028383},
  { latitude: -23.419188435359274, longitude: -46.40713420750172},
  { latitude: -23.421551216983808, longitude: -46.40695181727137},
  { latitude: -23.42235356865979, longitude: -46.40651729940367},
  { latitude: -23.42298855516791, longitude: -46.40648511288871},
  { latitude: -23.42339218841393, longitude: -46.40665140985277},
]);

const [selectedCoord, setSelectedCoord] = useState<LatLng | null>(null);


  return (
    <View style={styles.container}>
      <MapView  
        style={styles.map}
        initialRegion={{
          latitude: -23.435645979294325,
          longitude: -46.44505828464911,
          latitudeDelta: 0.19,
          longitudeDelta: 0.14,
        }}
        onPress={() => setSelectedCoord(null)}
      >
         <Polyline
          coordinates={routeCoordinates}
          strokeColor="#000000"
          strokeWidth={4} 
        />

      <Polyline
          coordinates={routeCoordinates2}
          strokeColor="#FF0000"
          strokeWidth={5}
          tappable={true}
          onPress={(e) => {
            setSelectedCoord(e.nativeEvent.coordinate ?? null);
          }}
      />
{selectedCoord && (
          <View style={[styles.popup, {
            left: selectedCoord.longitude,
            top: selectedCoord.latitude,
          }]}
          >
            <Text style={styles.popupText}> Pesquisar rota </Text>
          </View>
        )}
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
  popup: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  popupText: {
    color: 'black',
  },
});
