import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/stack.routes';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

type NavigationProps = StackNavigationProp<RootStackParamList>;

// pega as telas do stack.routes e organiza elas por id, titúlo e a tela que ele precisa entrar
const pages: { id: string; title: string; route: keyof RootStackParamList }[] = [
  { id: '1', title: 'Linha 813 - Terminal CECAP', route: 'onibus813' },
];

export default function SearchScreen() {
  const [query, setQuery] = useState(''); // texto de input
  const [filteredPages, setFilteredPages] = useState<{ id: string; title: string; route: keyof RootStackParamList }[]>([]); //páginas filtradas para aparecer
  const navigation = useNavigation<NavigationProps>();

  // função de pesquisa
  const handleSearch = (text: string) => {
    setQuery(text);
    if (text) { // se o texto da query for válido, exibir a página correspondente, se não ele não exibe nada
      const results = pages.filter((page) =>
        page.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPages(results);
    } else {
      setFilteredPages([]);
    }
  };

  // pega as páginas do react navigation para mandar para mandar para a tela correspondente a pesquisa
  const handleSelectPage = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
    setQuery('');
    setFilteredPages([]);
  };



  return (
    <View style={styles.container}>
      {/* botão para voltar uma tela atrás */}
      <TouchableOpacity
        style={styles.buttonvoltar}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
        <Image
        style={styles.Logo}
        source={require(('../../assets/icon.png'))}
      />
      
      {/* searchbar */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Pesquise uma linha..."
          value={query}
          onChangeText={handleSearch}
        />
      </View>

  {/* aqui ele filtra a página, pegando a pesquisa correspondente pelo texto e exibindo embaixo da searchbar o resultado da pesquisa, com a tela correspondente */}
      {filteredPages.length > 0 && (
        <FlatList
          style={styles.suggestionList}
          data={filteredPages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestionItem}
              onPress={() => handleSelectPage(item.route)}
            >
              <Text style={styles.suggestionText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#EBCB4A',
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '90%',
    elevation: 5,
  },
  icon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#000'
  },
  suggestionList: {
    borderRadius: 10,
    position: 'absolute',
    top: '65%', 
    width: '90%',
  },
  suggestionItem: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 2,
  },
  suggestionText: {
    fontSize: 16,
  },
  textTitulo: {
   fontWeight: 'bold',
   textAlign: 'center',
   fontSize: 24,
   bottom: '24%',
  },
  Logo: {
 
    width: 200,
    height: 200,
    alignItems: 'center',
  },
  buttonvoltar: {
    position: 'absolute',
    top: 45,
    left: 20, 
    backgroundColor: '#EBCB4A',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
