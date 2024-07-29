import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import booksData from './books.json';

const DivineBooksList = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData.books);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Divine Books</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('BookContents', { book: item })}>
            <View style={styles.bookItem}>
              <Text style={styles.bookTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bookTitle: {
    fontSize: 18,
  },
});

export default DivineBooksList;
