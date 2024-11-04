import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
 
export default function Atendimento() {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [text2, setText2] = useState('');
  const [isFocused2, setIsFocused2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
 
  const handleSend = () => {
    if (!text.trim()) return;
 
    setLoading(true);
    setStatusMessage('');
 
    const templateParams = {
      message: text,
    };
 
    emailjs.send('service_t89eudc', 'template_xlmilk9', templateParams, '4b6D5sKby0Ibz6iB9')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('Mensagem enviada com sucesso!');
        setText('');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatusMessage('Falha ao enviar a mensagem. Tente novamente.');
      })
      .finally(() => {
        setLoading(false);
      });
  };
 
  return (
<View style={styles.container}>
<Text>Entre em contato com o suporte da Wimb via email</Text>
<TextInput
        style={styles.email}
        placeholder={isFocused ? '' : '  Digite seu email'}
        value={text}
        onChangeText={setText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

<TextInput
        style={styles.mensagem}
        placeholder={isFocused2 ? '' : '  Digite sua mensagem'}
        value={text2}
        onChangeText={setText2}
        onFocus={() => setIsFocused2(true)}
        onBlur={() => setIsFocused2(false)}
      />
<TouchableOpacity style={styles.enviar} onPress={handleSend} disabled={loading}>
        {loading ? (
<ActivityIndicator color="#fff" />
        ) : (
<Text style={styles.textoEnviar}>Enviar</Text>
        )}
</TouchableOpacity>
 
      {statusMessage !== '' && (
<Text style={styles.statusMessage}>{statusMessage}</Text>
      )}
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBCB4A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  email: {
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    margin: 20,
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
    height: '50%',
    textAlignVertical: 'top',
    marginBottom: 40
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
});