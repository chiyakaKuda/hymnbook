// ChaptersScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ChaptersScreen = ({ route, navigation }) => {
  const { book } = route.params;

  const handleChapterSelect = (index) => {
    navigation.navigate('BookContents', { book, currentChapterIndex: index });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={book.chapters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleChapterSelect(index)} style={styles.chapterItem}>
            <Text style={styles.chapterTitle}>{item.title}</Text>
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
  chapterTitle: {
    fontSize: 18,
  },
});

export default ChaptersScreen;
