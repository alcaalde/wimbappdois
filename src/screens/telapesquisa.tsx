import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/stack.routes';

type NavigationProps = StackNavigationProp<RootStackParamList>;

const pages: { id: string; title: string; route: keyof RootStackParamList }[] = [
  { id: '1', title: 'Ônibus 813 - Terminal CECAP', route: 'onibus813' },
];

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [filteredPages, setFilteredPages] = useState<{ id: string; title: string; route: keyof RootStackParamList }[]>([]);
  const navigation = useNavigation<NavigationProps>();

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text) {
      const results = pages.filter((page) =>
        page.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPages(results);
    } else {
      setFilteredPages([]);
    }
  };

  const handleSelectPage = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
    setQuery('');
    setFilteredPages([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquise uma página..."
        value={query}
        onChangeText={handleSearch}
      />
      {filteredPages.length > 0 && (
        <FlatList
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
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  suggestionText: {
    fontSize: 16,
  },
});
