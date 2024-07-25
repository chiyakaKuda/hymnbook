import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import hymnsData from './hymns.json'; 



const HymnsListScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.hymnItem}
      onPress={() => navigation.navigate('HymnDetails', { hymnId: item.id })}
    >
      <Text style={styles.hymnTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hymns List</Text>
      <FlatList
        data={hymnsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  hymnItem: {
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
  hymnTitle: {
    fontSize: 22,
    color: '#434A42',
    fontWeight: '500',
    fontFamily: 'sans-serif-medium',

  },
});

export default HymnsListScreen;
