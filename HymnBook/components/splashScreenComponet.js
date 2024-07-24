import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SplashScreenComponent = () => {
  const [loading, setLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const value = await AsyncStorage.getItem('isRegistered');
        if (value !== null) {
          setIsRegistered(true);
        }
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    checkRegistration();
  }, []);

  const handleSignUp = () => {
    // Navigate to sign-up screen
    navigation.navigate('SignUp');
  };

  const handleMainMenu = () => {
    // Navigate to main menu screen
    navigation.navigate('MainMenu');
  };

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
        <Text style={styles.welcomeText}>Mangwanani Munhu Washe</Text>
        {isRegistered ? (
          <Button title="Go to Main Menu" onPress={handleMainMenu} />
        ) : (
          <Button title="Sign Up" onPress={handleSignUp} />
        )}
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
