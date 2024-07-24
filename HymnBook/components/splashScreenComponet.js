import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreenComponent = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate a loading time for the splash screen
    const timer = setTimeout(() => {
      setLoading(false);
      navigation.replace('MainMenu');
    }, 2000); // Adjust the time as necessary

    return () => clearTimeout(timer);
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ImageBackground source={require('../assets/images/back.png')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Good Morning munhu washe</Text>
        {/* Other components or content can go here */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(173, 216, 230, 0.6)', // Light blue shadow
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
});

export default SplashScreenComponent;
