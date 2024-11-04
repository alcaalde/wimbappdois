import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';

type RootStackParamList = {
    login: undefined;
    cadastro: undefined;
    home: undefined;
    senha: undefined;
    infoOnibus: undefined;
  };

  const Stack = createStackNavigator<RootStackParamList>();
  type Props = StackScreenProps<RootStackParamList, 'infoOnibus'>;

export default function InfoOnibus({ navigation }:Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} 
      onPress={() => navigation.navigate('home')}>
      <Feather name="arrow-left" style={styles.icon}/>
      </TouchableOpacity>
     <View style={styles.head}>
      <Text style={styles.titulo}> WIMB </Text>
         <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
      </View>

      <TouchableOpacity style={styles.onibus}>
          <Text style={styles.onibusTexto}>351 - Shopping Internacional</Text>
          <View style={styles.horario}>
            <Text style={styles.horarioTexto}>12 minutos</Text>
          </View>
      </TouchableOpacity>
      
      <View style={styles.conteudo}>
      <View style={styles.conteudoTitulo}>
        <Text style={styles.proximos}>Próximos</Text>
        <View style={styles.line}/>
      </View>
      <View style={styles.inline}>
      <View style={styles.onibusProximo}>
          <Text style={styles.onibusTextoProximo}>351 - Shopping Internacional</Text>
      </View>
      <View style={styles.horarioProximo}>
            <Text style={styles.horarioTextoProximo}>30 minutos</Text>
      </View>
     
      </View>
      <View style={styles.inline}>
      <View style={styles.onibusProximo}>
          <Text style={styles.onibusTextoProximo}>351 - Shopping Internacional</Text>
      </View>
      <View style={styles.horarioProximo}>
            <Text style={styles.horarioTextoProximo}>47 minutos</Text>
          </View>
      </View>
      <View style={styles.inline}>
      <View style={styles.onibusProximo}>
          <Text style={styles.onibusTextoProximo}>351 - Shopping Internacional</Text>
      </View>
      <View style={styles.horarioProximo}>
            <Text style={styles.horarioTextoProximo}>55 minutos</Text>
          </View>
      </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 15,
  },

  voltar: {
    width: '100%',
  },

  icon: {
    fontSize: 30
  },

  head: {
    marginTop: 0,
  },

  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 20,
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

  conteudo: {
    borderWidth: 1,
    borderColor: 'black',
    width: '85%',
    height: '35%',
    marginTop: 40,
    alignItems: 'center',
    borderRadius: 20
   },

 conteudoTitulo: {
  width: '90%',
  marginTop: 20,
  alignItems: 'flex-start',
 },

 proximos: {
  fontSize: 15,
  textAlign: 'left',
  fontWeight: '600',
  marginBottom: 5
},

line: {
  borderTopColor: 'black',
  borderTopWidth: 1,
  width: '95%',
  marginBottom: 20,
 },

 onibusProximo:{
  width: '60%',
  backgroundColor: '#545454',
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 5,
  borderRadius: 20,
  marginBottom: 10
 },

 onibusTextoProximo: {
  fontWeight: '600',
  fontSize: 10,
  color: 'white'
 },

 onibus:{
  width: '90%',
  backgroundColor: '#EBCB4A',
  height: 50,
  borderRadius: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 15,
  marginBottom: 20,
  elevation: 5
 },
 onibusTexto: {
  fontWeight: '700',
  marginLeft: 7,
  flex: 1,
  fontSize: 12
 },
 horario:{
  backgroundColor: '#545454',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 15,
  borderRadius: 20,
  width: '45%',
  marginRight: -25
 },

horarioTexto: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 12
},

 horarioProximo:{
  backgroundColor: '#EBCB4A',
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 4,
  borderRadius: 20,
  width: '25%',
  marginLeft: 25,
  marginBottom: 10
 },

horarioTextoProximo: {
  fontWeight: '700',
  fontSize: 10
},

inline:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}
});