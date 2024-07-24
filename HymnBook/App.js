import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splashScreenComponent from './components/splashScreenComponet';
import SignUpScreen from './components/SignUpScreen'; // Create this component
import MainMenuScreen from './components/MainMenuScreen'; // Create this component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={splashScreenComponent} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
