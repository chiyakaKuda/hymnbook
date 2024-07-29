import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ChaptersScreen = ({ route, navigation }) => {
  const { chapters } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chapters</Text>
      <FlatList
        data={chapters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ChapterContent', { content: item.content })}>
            <View style={styles.chapterItem}>
              <Text style={styles.chapterTitle}>{item.title}</Text>
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
  chapterItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chapterTitle: {
    fontSize: 18,
  },
});

export default ChaptersScreen;
