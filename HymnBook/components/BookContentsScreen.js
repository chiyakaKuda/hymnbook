import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BookContentsScreen = ({ route, navigation }) => {
  const { book } = route.params;
  const [selectedChapter, setSelectedChapter] = useState(book.chapters[0]);

  if (!book) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No book data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Chapters', { chapters: book.chapters, setSelectedChapter })}
        >
          <Text style={styles.menuButtonText}>Chapters</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.chapterTitle}>{selectedChapter.title}</Text>
        <Text style={styles.chapterContent}>{selectedChapter.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 8,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  menuButtonText: {
    fontSize: 16,
  },
  content: {
    marginTop: 16,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chapterContent: {
    fontSize: 16,
    marginTop: 8,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BookContentsScreen;
