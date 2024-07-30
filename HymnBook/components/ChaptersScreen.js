import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import booksData from './books.json';

const Chapters = ({ navigation, route }) => {
  const { chapters } = route.params;

  const handleChapterSelect = (index) => {
    navigation.navigate('BookContents', { chapters, currentChapterIndex: index });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chapters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleChapterSelect(index)} style={styles.chapterItem}>
            <Text style={styles.chapterText}>{item.title}</Text>
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
  chapterItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chapterText: {
    fontSize: 18,
  },
});

export default Chapters;
