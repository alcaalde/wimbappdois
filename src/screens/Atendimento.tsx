// Importa os componentes e hooks necessários
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Função principal da tela Atendimento
export default function Atendimento() {
  // Estados para armazenar os dados dos campos e o status da requisição
  const [nome, setNome] = useState('');
  const [isFocusedNome, setIsFocusedNome] = useState(false);
  const [email, setEmail] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [texto, setTexto] = useState('');
  const [isFocusedTexto, setIsFocusedTexto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Função que envia a mensagem via emailjs
  const handleSend = () => {
    if (!nome.trim()) return;

    setLoading(true);
    setStatusMessage('');

    const templateParams = {
      nome: nome,
      email: email,
      texto: texto,
    };

    emailjs.send('service_t89eudc', 'template_xlmilk9', templateParams, '4b6D5sKby0Ibz6iB9')
      .then((response) => {
        setStatusMessage('Mensagem enviada com sucesso!');
        setNome('');
        setEmail('');
        setTexto('');
      })
      .catch((err) => {
        setStatusMessage('Falha ao enviar a mensagem. Tente novamente.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>WIMB</Text>
      <Text style={styles.subtitulo}>WHERE IS MY BUS</Text>

      {/* Caixa de informações */}
      <View style={styles.caixaTextos}>
        <Text style={styles.tituloPagina}>Entre em contato</Text>
        <Text style={styles.subtituloPagina}>Envie sua mensagem e receba o retorno em até 5 dias úteis.</Text>
      </View>

      {/* Campos de entrada */}
      <TextInput
        style={styles.email}
        placeholder={isFocusedNome ? '' : '  Nome'}
        value={nome}
        onChangeText={setNome}
        onFocus={() => setIsFocusedNome(true)}
        onBlur={() => setIsFocusedNome(false)}
      />
      <TextInput
        style={styles.email}
        placeholder={isFocusedEmail ? '' : '  Email'}
        value={email}
        onChangeText={setEmail}
        onFocus={() => setIsFocusedEmail(true)}
        onBlur={() => setIsFocusedEmail(false)}
      />
      <TextInput
        style={styles.mensagem}
        placeholder={isFocusedTexto ? '' : '  Digite sua mensagem'}
        value={texto}
        onChangeText={setTexto}
        onFocus={() => setIsFocusedTexto(true)}
        onBlur={() => setIsFocusedTexto(false)}
      />

      {/* Botão de enviar */}
      <TouchableOpacity style={styles.enviar} onPress={handleSend} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.textoEnviar}>Enviar</Text>
        )}
      </TouchableOpacity>

      {/* Exibe a mensagem de status */}
      {statusMessage !== '' && (
        <Text style={styles.statusMessage}>{statusMessage}</Text>
      )}
    </View>
  );
}

// Estilos dos componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBCB4A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 40,
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
  email: {
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
    padding: 12,
    width: '80%',
    elevation: 5,
    paddingVertical: 10,
  },
  mensagem: {
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    padding: 12,
    width: '80%',
    elevation: 5,
    paddingVertical: 10,
    height: '30%',
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  enviar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 12,
    borderWidth: 0,
    width: '80%',
    backgroundColor: '#545454',
    marginBottom: 40,
    elevation: 5,
  },
  textoEnviar: {
    fontSize: 15,
    color: 'white',
  },
  statusMessage: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
  },
  caixaTextos: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '80%',
  },
  tituloPagina: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  subtituloPagina: {
    fontSize: 15,
    fontWeight: 'light',
    marginBottom: 35,
  },
});
