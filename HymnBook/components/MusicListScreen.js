import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,FON } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome
import musicData from './music.json'; // Your music data JSON

const MusicListScreen = () => {
  // State to manage favorite songs
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id) ? prevFavorites.filter(favId => favId !== id) : [...prevFavorites, id]
    );
  };

  const renderItem = ({ item }) => {
    const isFavorite = favorites.includes(item.id);
    return (
    <TouchableOpacity onPress={() => navigation.navigate('Player', { title: item.title, artist: item.artist, url: item.url })}>
      <View style={styles.musicItem}>
      <FontAwesome name="headphones" size={30} color="#E1CA96" style={styles.musicIcon} />
    
        <View style={styles.musicInfo}>
          <Text style={styles.musicTitle}>{item.title}</Text>
          <Text style={styles.musicArtist}>{item.artist}</Text>
          <Text style={styles.musicLength}>{item.length}</Text>
        </View>
        <View style={styles.musicActions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => { /* Implement play functionality */ }}>
            <FontAwesome name="play-circle" size={30} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => toggleFavorite(item.id)}>
            <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={30} color={isFavorite ? "#E1CA96" : "#FFF"} />
          </TouchableOpacity>
        </View>
      </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Music</Text>
      <FlatList
        data={musicData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434a42',
    padding: 20,
  },
  musicIcon: {
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  musicItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
    borderBottomColor: '#ccc',
    backgroundColor: '#626C66',
    borderRadius: 10,
    marginBottom: 10,
  },
  musicLength: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  musicInfo: {
    flex: 1,
    marginRight: 10, // Adds space between the text and the icons
  },
  musicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  musicArtist: {
    fontSize: 16,
    color: '#E1CA96',
  },
  musicActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 10,
  },
});

export default MusicListScreen;
