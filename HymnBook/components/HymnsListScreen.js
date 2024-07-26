import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import hymnsData from './hymns.json'; 
import {useState} from 'react'



const HymnsListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHymns, setFilteredHymns] = useState(hymnsData);
  const navigation = useNavigation();

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query === '') {
      setFilteredHymns(hymnsData);
      return;
    }

    const lowercasedQuery = query.toLowerCase();
    const results = hymnsData.filter(hymn =>
      hymn.id.toString().includes(lowercasedQuery) ||
      hymn.title.toLowerCase().includes(lowercasedQuery) ||
      hymn.lyrics.toLowerCase().includes(lowercasedQuery)
    );

  //  console.log('Filtered Results:', results); // Debugging
    setFilteredHymns(results);
  };

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
      <Text style={styles.header}>Hymns</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Number, Name, Lyrics"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredHymns}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
        showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar (if applicable)
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
  searchInput: {
    height: 45, // Slightly taller for better visibility
    borderColor: '#E1CA96', // Bright yellow border for visibility
    borderWidth: 2, // Thicker border for emphasis
    borderRadius: 25, // Rounded corners for a more modern look
    paddingHorizontal: 15, // More padding for comfortable typing
    backgroundColor: '#FFFFFF', // White background for the input field
    marginBottom: 20, // Increased margin for separation from other elements
    fontSize: 18, // Larger font size for readability
    color: '#434A42', // Dark gray text color for contrast
    elevation: 3, // Slight shadow to lift the input field
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
