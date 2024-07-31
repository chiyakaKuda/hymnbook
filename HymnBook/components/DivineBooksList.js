// DivineBooksScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native'
import booksData from './books.json';




const DivineBooksScreen = ({ navigation }) => {
  if (!booksData || booksData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No books available.</Text>
      </View>
    );
  }

  const handleBookSelect = (book) => {
    navigation.navigate('Chapters', { book });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={booksData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBookSelect(item)} style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
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
  },
  bookItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bookTitle: {
    fontSize: 18,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DivineBooksScreen;
