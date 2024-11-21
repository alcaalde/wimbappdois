import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { TextInputMask } from 'react-native-masked-text';
import { auth, db } from './config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

type RootStackParamList = {
  login: undefined;
  cadastro: undefined;
  home: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'cadastro'>;

export default function Cad({ navigation }: Props) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  // Expressões regulares para validação
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const telefoneRegex = /^[0-9]{10,11}$/;
  const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  // Função de envio do formulário
  const handleSubmit = async () => {
    if (nome === '' || email === '' || telefone === '' || senha === '') {
      setError('Preencha todos os campos.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (!telefoneRegex.test(telefone.replace(/\D/g, ''))) {
      setError('Por favor, insira um número de telefone válido.');
      return;
    }

    if (!senhaRegex.test(senha)) {
      setError('Senha inválida. Deve conter ao menos 6 caracteres, incluindo letras e números.');
      return;
    }

    try {
      // Cadastrar usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const userId = userCredential.user.uid;

      // Salvar dados no Realtime Database
      await set(ref(db, `users/${userId}`), {
        nome,
        email,
        telefone: telefone.replace(/\D/g, ''), // Remover máscara para salvar somente os números
      });

      setError('');
      Alert.alert('Sucesso!', 'Cadastro realizado com sucesso.');
      navigation.navigate('home');
    } catch (error: any) {
      setError('Erro ao cadastrar: ' + error.message);
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

      <TextInput
        style={styles.campo}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.campo}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInputMask
        style={styles.campo}
        type="custom"
        options={{ mask: '(99) 99999-9999' }}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.campo}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Text style={styles.exigenciaSenha}>
        A senha deve conter no mínimo 6 caracteres, incluindo letras e números.
      </Text>

      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}

      <TouchableOpacity style={styles.cadastrar} onPress={handleSubmit}>
        <Text style={styles.textocadastrar}>Cadastrar</Text>
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
  subtitulo: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: 8,
    marginBottom: 40,
  },
  campo: {
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    marginTop: 20,
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    elevation: 5,
    paddingVertical: 10,
  },
  cadastrar: {
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    paddingVertical: 12,
  },
  textocadastrar: {
    fontSize: 15,
    color: '#000000',
  },
  voltar: {
    width: '100%',
    marginTop: '0%',
  },
  icon: {
    fontSize: 30,
  },
  
  exigenciaSenha: {
    fontSize: 10,
    maxWidth: '75%',
    alignSelf: 'flex-start',
    marginLeft: '12%',
    lineHeight: 12,
    marginTop: 5,
    marginBottom: '5%'
  }
});
