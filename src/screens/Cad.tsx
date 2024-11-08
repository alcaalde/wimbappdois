import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { TextInputMask } from 'react-native-masked-text';

type RootStackParamList = {
  login: undefined;
  cadastro: undefined;
  home: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'cadastro'>;


//nome emai tel senha
export default function Cad({ navigation }:Props){
  const [nome, setNome] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const [email, setEmail] = useState('');
  const [isFocused2, setIsFocused2] = useState(false);

  const [telefone, setTelefone] = useState('');
  const [isFocused3, setIsFocused3] = useState(false);
  
  const [senha, setSenha] = useState('');
  const [isFocused4, setIsFocused4] = useState(false);
  
  const [error, setError] = useState('');
  
    // Expressão regular para validar formato de e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    const handleSubmit = () => {
      if (nome==''){
        setError('O campo nome não pode estar vazio.');
      }
      else{
      if (!email) {
        setError('O e-mail não pode estar vazio.');
      } else if (!emailRegex.test(email)) {
        setError('Por favor, insira um e-mail válido.');
      } else {
        if(telefone==''){
          setError('O campo Telefone não pode estar vazio.');
        }
        else{
        if(senha=='') {
          setError('A senha não pode estar vazia.');
        }
        else{
          if(senha.length < 6) {
            setError('A senha deve ter no mínimo 6 dígitos.');
        }
        else {
          setError('');
          navigation.navigate('home')
        }
      }
    }
    }
  }
  };
  
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.voltar} 
      onPress={() => navigation.navigate('login')}>
      <Feather name="arrow-left" style={styles.icon}/>
      </TouchableOpacity>
      <View>

      <Text style={styles.titulo}> WIMB </Text>
         <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
      </View>

        <TextInput style={styles.campo}
        placeholder={isFocused ? '' : 'Nome'}
        value={nome}
        onChangeText={setNome}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}>
        </TextInput>

        <TextInput style={styles.campo} 
        placeholder={isFocused2 ? '' : 'Email'}
        value={email}
        onChangeText={setEmail}
        onFocus={() => setIsFocused2(true)}
        onBlur={() => setIsFocused2(false)}>
        </TextInput>

        <TextInputMask
        style={styles.campo}
        type={'custom'}
        options={{
          mask: '(99) 99999-9999', // A máscara para telefone brasileiro
        }}
        placeholder={isFocused3 ? '' : 'Telefone'}
        value={telefone}
        onChangeText={setTelefone}
        onFocus={() => setIsFocused3(true)}
        onBlur={() => setIsFocused3(false)}>
        </TextInputMask>

        <TextInput style={styles.campo}
        placeholder={isFocused4 ? '' : 'Senha'}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true} // Senha mascarada
        autoCapitalize="none"
        onFocus={() => setIsFocused4(true)}
        onBlur={() => setIsFocused4(false)}
        >
        
          
        </TextInput>
        
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        <TouchableOpacity style={styles.cadastrar}
        onPress={handleSubmit}>

        <Text style={styles.textocadastrar}> Cadastrar </Text>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#EBCB4A',
    padding: 15,
  },

  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 15,
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

  campo:{
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    margin: 15,
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    elevation: 5,
    paddingVertical: 10

  },
  textInput:{
    fontWeight: 'light',
    fontSize: 10,
    marginLeft: 70,
  },

  cadastrar: {
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    paddingVertical: 12
  },

  textocadastrar:{
    fontSize: 15,
    color: '#000000',
  },
  
  voltar: {
    width: '100%',
    marginTop: '0%'
  },
  icon: {
    fontSize: 30
  }
});

