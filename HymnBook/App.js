import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './components/MainMenuScreen'; // Ensure this component exists
import AboutScreen from './components/AboutScreen';
import FAQsScreen from './components/FAQsScreen';



const Stack = createStackNavigator();


const App = () => {
  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainMenu">
          <Stack.Screen
            name="MainMenu"
            component={MainMenuScreen}
            options={{ headerShown: false }} // Hide the default header
          />
           <Stack.Screen name="About" component={AboutScreen} />
           <Stack.Screen name="FAQs" component={FAQsScreen} />
          

        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;
