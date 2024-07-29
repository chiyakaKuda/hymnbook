import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import hymnsData from './hymns.json';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';




const HymnDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [currentHymnId, setCurrentHymnId] = useState(route.params.hymnId);
  const hymn = hymnsData.find(h => h.id === currentHymnId);

  const navigateToHymn = (hymnId) => {
    if (hymnId >= 1 && hymnId <= hymnsData.length) {
      setCurrentHymnId(hymnId);
    }
  };

  const onSwipeLeft = () => {
    if (currentHymnId < hymnsData.length) {
      navigateToHymn(currentHymnId + 1);
    }
  };

  const onSwipeRight = () => {
    if (currentHymnId > 1) {
      navigateToHymn(currentHymnId - 1);
    }
  };

  if (!hymn) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Hymn not found.</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
     
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}>
          <Text style={styles.title}>{hymn.title}</Text>
          <Text style={styles.lyrics}>{hymn.lyrics}</Text>
       
   
        
      </ScrollView>
      <View style={styles.navigationButtons}>
      <TouchableOpacity onPress={onSwipeRight} disabled={currentHymnId <= 1} style={styles.iconContainer}>
      <FontAwesome name="arrow-left" size={30} color={currentHymnId <= 1 ? '#ACA885' : '#434A42'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSwipeLeft} disabled={currentHymnId >= hymnsData.length} style={styles.iconContainer}>
      <FontAwesome name="arrow-right" size={30} color={currentHymnId >= hymnsData.length ? '#ACA885' : '#434A42'} />
      </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default HymnDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E1CA96',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    //textAlign: 'center',
  },
  lyrics: {
    fontSize: 18,
    color: '#434A42',
    lineHeight: 24,
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  icon:{
    marginBottom:17,
  }
  
});