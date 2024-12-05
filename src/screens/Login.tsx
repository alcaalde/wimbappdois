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
 // Declaração de estado para armazenar o valor do e-mail digitado pelo usuário.
const [email, setEmail] = useState(''); 

// Declaração de estado para armazenar o valor da senha digitada pelo usuário.
const [senha, setSenha] = useState('');

// Declaração de estado para armazenar mensagens de erro que serão exibidas caso o usuário cometa algum erro ao preencher o formulário.
const [error, setError] = useState('');

// Expressão regular para validação de um e-mail válido. A regex verifica se o formato do e-mail é adequado.
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Função que será chamada quando o formulário for submetido (geralmente ao pressionar o botão de login ou cadastro).
const handleSubmit = async () => {
  // Verifica se os campos de e-mail ou senha estão vazios. Se estiverem, exibe uma mensagem de erro e retorna sem prosseguir.
  if (email === '' || senha === '') {
    setError('Preencha todos os campos.');
    return; // Impede a execução de qualquer outra lógica caso o formulário não esteja completo
  }

  // Valida o e-mail utilizando a regex. Caso o formato do e-mail esteja incorreto, exibe uma mensagem de erro.
  if (!emailRegex.test(email)) {
    setError('Por favor, insira um e-mail válido.');
    return; // Impede a execução de qualquer outra lógica caso o e-mail seja inválido
  }



    try {
       // Tenta autenticar o usuário com o e-mail e a senha fornecidos
      const userCredential = await signInWithEmailAndPassword(auth, email, senha); 
      const userId = userCredential.user.uid;

       // Cria uma referência ao banco de dados Firebase no caminho específico para o usuário
      const userRef = ref(db, `users/${userId}`);
      const snapshot = await get(userRef);

        // Verifica se os dados do usuário existem no banco de dados
      if (snapshot.exists()) {
        const userData = snapshot.val();
        console.log('Dados do usuário:', userData);
        navigation.navigate('home');
      } else {
        console.error('Nenhum dado encontrado para este usuário.');
        setError('Usuário não encontrado no banco de dados.');
      }
    } catch (error: any) {
      setError('E-mail ou senha incorretos! ');
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
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingTop: Constants.statusBarHeight, 
    backgroundColor: '#EBCB4A',
    padding: 15 
  },

  titulo: { 
    fontSize: 35, 
    textAlign: 'center', 
    marginTop: 15, 
    fontWeight: 'bold', 
    letterSpacing: 5 
  },

  subtitulo: { 
    fontSize: 10, 
    textAlign: 'center', 
    marginTop: 5, 
    letterSpacing: 8,
    marginBottom: 40 
  },

  campo: { 
    backgroundColor: 'white', 
    borderRadius: 20, 
    fontSize: 15, 
    margin: 15, 
    padding: 12, 
    width: '80%',
    elevation: 10
  },

  entrar: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 20, 
    margin: 10, 
    padding: 12, 
    borderWidth: 1, 
    width: '80%' 
  },

  textoenviar: { 
    fontSize: 15 
  },

  cadastrar: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 3, 
    backgroundColor: '#545454', 
    width: '80%', 
    padding: 12, 
    borderRadius: 20 
  },

  textocadastrar: { 
    fontSize: 15, 
    color: 'white' 
  },

  textoinferior: { 
    fontSize: 10, 
    textAlign: 'center', 
    marginTop: 15, 
    textDecorationLine: 'underline' 
  },
});
