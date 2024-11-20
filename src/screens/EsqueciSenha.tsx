import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { auth } from './config/firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

type RootStackParamList = {
  login: undefined;
  senha: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'senha'>;

export default function EsqueciSenha({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Expressão regular para validar o e-mail
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Função para enviar o e-mail de redefinição
  const handleSendPasswordReset = async () => {
    if (email === '') {
      setError('Preencha o campo de e-mail.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      // Enviar e-mail de redefinição de senha
      await sendPasswordResetEmail(auth, email);
      setError('');
      Alert.alert('E-mail enviado', 'Confira seu e-mail para redefinir a senha.');
      navigation.navigate('login');
    } catch (error: any) {
      setError('Erro ao enviar e-mail: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('login')}>
        <Feather name="arrow-left" style={styles.icon} />
      </TouchableOpacity>

      <View>
        <Text style={styles.titulo}>WIMB</Text>
        <Text style={styles.subtitulo}>WHERE IS MY BUS</Text>
      </View>

      <View style={styles.caixaTextos}>
        <Text style={styles.tituloPagina}>Esqueceu a senha?</Text>
        <Text style={styles.subtituloPagina}>
          Digite o e-mail vinculado à sua conta para redefinir a senha.
        </Text>
      </View>

      <TextInput
        style={styles.campo}
        placeholder={isFocused ? '' : 'E-mail'}
        value={email}
        onChangeText={setEmail}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}

      <TouchableOpacity style={styles.enviar} onPress={handleSendPasswordReset}>
        <Text style={styles.textocadastrar}>Enviar</Text>
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
  voltar: {
    width: '100%',
  },
  icon: {
    fontSize: 30,
  },
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 15,
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
  caixaTextos: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '80%',
  },
  tituloPagina: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
  },
  subtituloPagina: {
    fontSize: 15,
    marginBottom: 35,
  },
  campo: {
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    margin: 15,
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    elevation: 5,
    paddingVertical: 10,
  },
  enviar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 3,
    padding: 12,
    borderWidth: 0,
    width: '80%',
    backgroundColor: '#545454',
    marginBottom: 40,
    elevation: 5,
    paddingVertical: 15,
  },
  textocadastrar: {
    fontSize: 15,
    color: 'white',
  },
});
