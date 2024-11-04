import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Search() {
  return (
    <View style={styles.container}>

     <View style={styles.head}>
      <Text style={styles.titulo}> WIMB </Text>
         <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
      </View>

     <TextInput style={styles.campo}/>

     <View style={styles.conteudo}>
        <View style={styles.local}>
        <Text style={styles.textoLocal}>(Sua localização)</Text>
        <Text style={styles.alterarLocal}>Alterar local</Text>
        <View style={styles.line}/>
        <TouchableOpacity style={styles.onibus}>
          <Text style={styles.onibusTexto}>351 - Shopping Internacional</Text>
          <View style={styles.horario}>
            <Text style={styles.horarioTexto}>12 minutos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.onibus}>
          <Text style={styles.onibusTexto}>351 - Shopping Internacional</Text>
          <View style={styles.horario}>
            <Text style={styles.horarioTexto}>12 minutos</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.onibus}>
          <Text style={styles.onibusTexto}>351 - Shopping Internacional</Text>
          <View style={styles.horario}>
            <Text style={styles.horarioTexto}>12 minutos</Text>
          </View>
        </TouchableOpacity>
        </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  head: {
    marginTop: 0,
  },
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 50,
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
  campo: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    width: '75%',
  },

 conteudo: {
  backgroundColor: '#DFDFDF',
  width: '100%',
  height: '55%',
  marginTop: 70,
  alignItems: 'center'
 },
 local: {
  width: '70%',
  top: 0
 },
 textoLocal: {
  fontSize: 16,
  fontWeight: 'bold', 
  marginBottom: 10, 
  marginTop: 20
 },
 alterarLocal: {
  fontSize: 12,
  textDecorationLine: 'underline'
 },
 line: {
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  marginVertical: 17
 },
 onibus:{
  width: '100%',
  backgroundColor: '#EBCB4A',
  height: 55,
  borderRadius: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  marginBottom: 20,
  elevation: 5
 },
 onibusTexto: {
  fontWeight: '500',
  marginLeft: 20,
  flex: 1,
  fontSize: 10
 },
 horario:{
  backgroundColor: '#545454',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
  marginRight: 0,
  borderRadius: 20
 },
horarioTexto: {
  color: '#fff',
  fontWeight: '800',
  fontSize: 12
}
});