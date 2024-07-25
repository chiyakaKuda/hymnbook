import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity,Modal, FlatList, Pressable,SafeAreaView,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon set
import { useNavigation } from '@react-navigation/native';

const MainMenuScreen = () => {
  const [greeting, setGreeting] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation =useNavigation();

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Mangwanani Akanaka');
    } else if (currentHour < 18) {
      setGreeting('Masikati Akanaka');
    } else {
      setGreeting('Manheru Akanaka');
    }
  }, []);

  const options = [
    { label: 'About', onPress: () =>navigation.navigate('About') },
    { label: 'FAQs', onPress: () => console.log('FAQs') },
    { label: 'Share', onPress: () => console.log('Share') },
    { label: 'Rate Us', onPress: () => console.log('Rate Us') },
    { label: 'Help', onPress: () => console.log('Help') },
    { label: 'Exit', onPress: () => console.log('Exit') }
  ];

  const handleOptionPress = (option) => {
    option.onPress();
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
    <ImageBackground source={require('../assets/images/back.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Title Bar */}
        <View style={styles.titleBar}>
          <Text style={styles.title}>AAC HYMNS</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="ellipsis-v" size={20} color="#fff" />
          </TouchableOpacity>
        </View>


       {/* Overlay for Greeting Text */}
        
          <Text style={styles.greetingText}>{greeting}, Munhu Washe</Text>
          <Text style={styles.greetingText1}>The African Apostolic Church YavaApostora VeAfrica Hymns.</Text>
     
        {/* Add more components for the main menu here */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="music" size={20} color="#fff" />
            <Text style={styles.buttonText}>Nziyo DzeShona</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="book" size={20} color="#fff" />
            <Text style={styles.buttonText}>Nziyo dzeXulu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="language" size={20} color="#fff" />
            <Text style={styles.buttonText}>Nziyo dze English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="globe" size={20} color="#fff" />
            <Text style={styles.buttonText}>Nziyo dzeXhosa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="shopping-cart" size={20} color="#fff" />
            <Text style={styles.buttonText}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="book" size={20} color="#fff" />
            <Text style={styles.buttonText}>Devine Books</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="music" size={20} color="#fff" />
            <Text style={styles.buttonText}>Music</Text>
          </TouchableOpacity>
        </View>
        {/* Modal for Options */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <FlatList
                data={options}
                keyExtractor={(item) => item.label}
                renderItem={({ item }) => (
                  <Pressable
                    style={styles.modalOption}
                    onPress={() => handleOptionPress(item)}
                  >
                    <Text style={styles.modalOptionText}>{item.label}</Text>
                  </Pressable>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 40,
    textAlign: 'center',
  },
  greetingText1: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 40,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10, // Spacing between icon and text
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    maxHeight: '50%',
    padding: 20,
    elevation: 10, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
  },
  modalOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#000',
  },
});

export default MainMenuScreen;
