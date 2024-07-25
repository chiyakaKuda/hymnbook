import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './components/MainMenuScreen'; // Ensure this component exists
import AboutScreen from './components/AboutScreen';
import FAQsScreen from './components/FAQsScreen';
import HymnsListScreen from './components/HymnsListScreen';
import HymnDetailsScreen from './components/HymnDetailsScreen';

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
           <Stack.Screen name="HymnsList" component={HymnsListScreen} options={{ title: 'Shona Hymns' }} />
           <Stack.Screen name="HymnDetails" component={HymnDetailsScreen} options={{ title: 'Shona Hymns'}}/>
          

        

        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;
