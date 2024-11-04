import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
      <View style={styles.image}><Feather name="user" style={styles.iconProfile}/></View>
      <View>
      <Text style={styles.nome}>Fabiano Silva</Text>
      <Text style={styles.email}>fabiano_silva@gmail.com</Text>
      </View>
      </View>
      <View style={styles.fav}>
        <Text style={styles.favTexto}>Favoritos</Text>
        <View style={styles.line}/>
      </View>
      <TouchableOpacity style={styles.onibus}>
      <View style={styles.horario}>
      <Feather name="heart" style={styles.icon}/>
      </View>
          <Text style={styles.onibusTexto}>351 - Shopping Internacional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.onibus}>
      <View style={styles.horario}>
      <Feather name="heart" style={styles.icon}/>
      </View>
          <Text style={styles.onibusTexto}>233 - Cocaia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.onibus}>
      <View style={styles.horario}>
      <Feather name="heart" style={styles.icon}/>
      </View>
          <Text style={styles.onibusTexto}>453 - Centro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex'
  },
  profile:{
    backgroundColor: '#DFDFDF',
    width: '100%',
    height: '35%',
    marginTop: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image:{
    width: '30%',
    height: '40%',
    backgroundColor: 'white',
    color: 'black',
    borderRadius:100,
    marginRight: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageText:{
    fontSize: 9,
    textAlign: 'center'
  },
  nome:{
    fontSize: 18,
    fontWeight: '400', 
    marginBottom: 10, 
    marginTop: 20
  },
  email:{
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '400',
    textDecorationLine: 'underline'
  }, 
  fav:{
    alignItems: 'flex-start',
    width: '80%',
    marginBottom: '5%',
    marginTop: '3%'
  },
  favTexto:{
    fontSize: 18,
    fontWeight: '600', 
    marginBottom: 10, 
    marginTop: 20,
    marginLeft: 0, 
  },
  onibus:{
    width: '85%',
    backgroundColor:'#545454',
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: '5%',
    elevation: 5, 
   },
   onibusTexto: {
    fontWeight: '700',
    marginLeft: 20,
    flex: 1,
    fontSize: 12, 
    color: 'white'
   },
   horario:{
    backgroundColor: '#EBCB4A',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 20,
    width: '20%',
    marginLeft: -25
   },
   icon: {
    color: 'black',
    fontSize: 20, 
    fontWeight: 'bold'
   },
   line: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    width: '100%',
    marginBottom: 10,
   },

   iconProfile: {
   fontSize: 80
   }
});
