import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function Config() {

  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput style={styles.campo}
      placeholder={isFocused ? '' : '  Pesquisar rota'}
      value={text}
      onChangeText={setText}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}/>
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
  campo: {
    backgroundColor: 'white',
    borderRadius: 25,
    fontSize: 15,
    color: 'black',
    padding: 12,
    width: '75%',
    height: 50,
    alignSelf: 'center',
    elevation: 7,
    paddingVertical: 10,
    borderWidth: 0.8, 
    position: 'absolute',
    bottom: 0,
    marginBottom: 20
  },

});