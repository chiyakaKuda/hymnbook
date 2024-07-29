import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './components/MainMenuScreen'; // Ensure this component exists
import AboutScreen from './components/AboutScreen';
import FAQsScreen from './components/FAQsScreen';
import HymnsListScreen from './components/HymnsListScreen';
import HymnDetailsScreen from './components/HymnDetailsScreen';
import DivineBooksList from './components/DivineBooksList';
import BookContentsScreen from './components/BookContentsScreen';
import ChaptersScreen from './components/ChaptersScreen';

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
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ 
            headerStyle: {
              backgroundColor: '#434A42', // Set your desired background color here
            },
            headerTintColor: '#FFFFFF', // Set your desired text color here
            headerTitleStyle: {
              fontWeight: 'bold', // Additional styling for the title text
              fontSize: 20,       // Set the font size of the title
            },
          }} 
        />
        <Stack.Screen 
          name="FAQs" 
          component={FAQsScreen} 
          options={{ 
            title: 'FAQs', 
            headerStyle: {
              backgroundColor: '#434A42', // Set your desired background color here
            },
            headerTintColor: '#FFFFFF', // Set your desired text color here
            headerTitleStyle: {
              fontWeight: 'bold', // Additional styling for the title text
              fontSize: 20,       // Set the font size of the title
            },
          }} 
        />
        <Stack.Screen 
          name="HymnsList" 
          component={HymnsListScreen} 
          options={{ 
            title: 'Shona Hymns', 
            headerStyle: {
              backgroundColor: '#434A42', // Set your desired background color here
            },
            headerTintColor: '#FFFFFF', // Set your desired text color here
            headerTitleStyle: {
              fontWeight: 'bold', // Additional styling for the title text
              fontSize: 20,       // Set the font size of the title
            },
          }} 
        />
        <Stack.Screen
          name="HymnDetails"
          component={HymnDetailsScreen}
          options={{
            title: 'Shona Hymns',
            headerStyle: {
              backgroundColor: '#434A42', // Set your desired background color here
            },
            headerTintColor: '#FFFFFF', // Set your desired text color here
            headerTitleStyle: {
              fontWeight: 'bold', // Additional styling for the title text
              fontSize: 20,       // Set the font size of the title
            },
          }}
        />
        <Stack.Screen
          name="DivineBooks"
          component={DivineBooksList}
          options={{
            title: 'Divine Books',
            headerStyle: {
              backgroundColor: '#434A42',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="BookContents"
          component={BookContentsScreen}
          options={{
            title: 'Book Contents',
            headerStyle: {
              backgroundColor: '#434A42',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Chapters"
          component={ChaptersScreen}
          options={{
            title: 'Chapters',
            headerStyle: {
              backgroundColor: '#434A42',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
