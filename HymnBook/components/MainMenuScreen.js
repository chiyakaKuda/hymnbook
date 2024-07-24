import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Menu</Text>
      {/* Add main menu components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default MainMenuScreen;
