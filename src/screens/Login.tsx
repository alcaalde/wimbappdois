import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import Constants from 'expo-constants';
import { auth, db } from './config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, get } from 'firebase/database';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  login: undefined;
  cadastro: undefined;
  home: undefined;
  senha: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'login'>;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async () => {
    if (email === '' || senha === '') {
      setError('Preencha todos os campos.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const userId = userCredential.user.uid;

      const userRef = ref(db, `users/${userId}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        console.log('Dados do usuário:', userData);
        navigation.navigate('home');
      } else {
        console.error('Nenhum dado encontrado para este usuário.');
        setError('Usuário não encontrado no banco de dados.');
      }
    } catch (error: any) {
      setError('Erro ao entrar: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> WIMB </Text>
      <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>

      <TextInput
        style={styles.campo}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.campo}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

      <TouchableOpacity style={styles.entrar} onPress={handleSubmit}>
        <Text style={styles.textoenviar}> Entrar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cadastrar} onPress={() => navigation.navigate('cadastro')}>
        <Text style={styles.textocadastrar}> Cadastrar </Text>
      </TouchableOpacity>

      <Text style={styles.textoinferior} onPress={() => navigation.navigate('senha')}>
        Esqueci a senha
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: Constants.statusBarHeight, backgroundColor: '#EBCB4A', padding: 15 },
  titulo: { fontSize: 35, textAlign: 'center', marginTop: 15, fontWeight: 'bold', letterSpacing: 5 },
  subtitulo: { fontSize: 10, textAlign: 'center', marginTop: 5, letterSpacing: 8, marginBottom: 40 },
  campo: { backgroundColor: 'white', borderRadius: 20, fontSize: 15, margin: 15, padding: 12, width: '80%' },
  entrar: { justifyContent: 'center', alignItems: 'center', borderRadius: 20, margin: 10, padding: 12, borderWidth: 1, width: '80%' },
  textoenviar: { fontSize: 15 },
  cadastrar: { justifyContent: 'center', alignItems: 'center', marginTop: 3, backgroundColor: '#545454', width: '80%', padding: 12, borderRadius: 20 },
  textocadastrar: { fontSize: 15, color: 'white' },
  textoinferior: { fontSize: 10, textAlign: 'center', marginTop: 15, textDecorationLine: 'underline' },
});
