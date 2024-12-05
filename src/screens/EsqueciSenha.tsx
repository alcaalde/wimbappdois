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
    // Contêiner principal da tela, geralmente usado para definir o layout e a estrutura.
<View style={styles.container}>

{/* Botão de voltar, que leva o usuário de volta à tela de login */}
<TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('login')}>
  {/* Ícone de seta para voltar, usando o componente Feather para ícones */}
  <Feather name="arrow-left" style={styles.icon} />
</TouchableOpacity>

{/* Bloco de texto com o título e subtítulo */}
<View>
  {/* Título principal da tela */}
  <Text style={styles.titulo}>WIMB</Text>
  {/* Subtítulo que acompanha o título */}
  <Text style={styles.subtitulo}>WHERE IS MY BUS</Text>
</View>

{/* Bloco de informações sobre a tela de recuperação de senha */}
<View style={styles.caixaTextos}>
  {/* Título da página */}
  <Text style={styles.tituloPagina}>Esqueceu a senha?</Text>
  {/* Subtítulo com instruções para o usuário */}
  <Text style={styles.subtituloPagina}>
    Digite o e-mail vinculado à sua conta para redefinir a senha.
  </Text>
</View>

{/* Campo de input onde o usuário pode inserir o e-mail */}
<TextInput
  style={styles.campo}
  // O texto placeholder desaparece ao focar no campo, indicando que o campo está em uso
  placeholder={isFocused ? '' : 'E-mail'}
  value={email} // Valor do e-mail, controlado pelo estado `email`
  onChangeText={setEmail} // Atualiza o estado do e-mail ao digitar no campo
  onFocus={() => setIsFocused(true)} // Define que o campo está focado quando o usuário clica nele
  onBlur={() => setIsFocused(false)} // Define que o campo perde o foco quando o usuário sai dele
  keyboardType="email-address" // Especifica que o teclado deve ser adequado para e-mails
  autoCapitalize="none" // Impede que o primeiro caractere seja automaticamente capitalizado
/>

{/* Exibe uma mensagem de erro, caso exista, em vermelho abaixo do campo de e-mail */}
{error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}

{/* Botão para enviar o pedido de redefinição de senha */}
<TouchableOpacity style={styles.enviar} onPress={handleSendPasswordReset}>
  {/* Texto dentro do botão */}
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
