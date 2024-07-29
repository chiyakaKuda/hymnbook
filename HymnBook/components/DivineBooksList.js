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
    backgroundColor: '#626C66',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E1CA96', // Softer black for text
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1,
  },
  bookItem: {
    padding: 16,
    marginBottom: 8,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#E1CA96',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bookTitle: {
    fontSize: 22,
    color: '#434A42',
    fontWeight: '500',
    fontFamily: 'sans-serif-medium',
  },
});

export default DivineBooksList;
