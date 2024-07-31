// ChapterContentsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const BookContentsScreen = ({ route, navigation }) => {
  const { book, currentChapterIndex: initialChapterIndex } = route.params;
  const [currentChapterIndex, setCurrentChapterIndex] = useState(initialChapterIndex || 0);

  useEffect(() => {
    if (!book || !book.chapters || book.chapters.length === 0) {
      navigation.goBack();
    }
  }, [book, navigation]);

  const currentChapter = book.chapters[currentChapterIndex];

  const handlePrevious = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentChapterIndex < book.chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Chapters', { book })}
        >
          <Text style={styles.menuButtonText}>Chapters</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}>
        <View style={styles.content}>
          <Text style={styles.chapterTitle}>{currentChapter.title}</Text>
          <Text style={styles.chapterContent}>{currentChapter.content}</Text>
        </View>
      </ScrollView>
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={handlePrevious} disabled={currentChapterIndex <= 0}>
          <EvilIcons
            name="arrow-left"
            size={50}
            color={currentChapterIndex <= 0 ? '#ACA885' : '#434A42'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} disabled={currentChapterIndex >= book.chapters.length - 1}>
          <EvilIcons
            name="arrow-right"
            size={50}
            color={currentChapterIndex >= book.chapters.length - 1 ? '#ACA885' : '#434A42'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E1CA96',
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
    color: '#333',
  },
  menuButton: {
    padding: 8,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  menuButtonText: {
    fontSize: 16,
    color: 'white',
  },
  content: {
    marginTop: 16,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#434A42',
  },
  chapterContent: {
    fontSize: 16,
    marginTop: 8,
    color: '#434A42',
    lineHeight: 24,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default BookContentsScreen;
