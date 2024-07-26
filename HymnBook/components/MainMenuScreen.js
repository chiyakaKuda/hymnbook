import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, FlatList, Pressable, SafeAreaView, StatusBar, Alert, Share, Clipboard,Linking,BackHandler } from 'react-native';
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
    { label: 'FAQs', onPress: () => navigation.navigate('FAQs') },
    { label: 'Share', onPress: () => handleSharePress()},
    { label: 'Rate Us', onPress: () => handleRateUsPress() },
    { label: 'Help', onPress: () => handleWhatsAppHelp() },
    { label: 'Exit', onPress: () =>handleExitPress() }
  ];

  const handleOptionPress = (option) => {
    option.onPress();
    setModalVisible(false);
  };
 
    const handleSharePress = async () => {
      const appLink = 'https://play.google.com/store/apps/details?id=com.yourapp'; // Replace with your app's Play Store link
      try {
        // Copy link to clipboard
        await Clipboard.setString(appLink);
  
        // Show a confirmation alert
     // Alert.alert('Link Copied', 'The app link has been copied to your clipboard.');
  
        // Share the link
        await Share.share({
          message: `Check out this app: ${appLink}`,
        });
      } catch (error) {
        console.error('Error sharing the app link:', error);
      }
    
  };
  
  // Replace with your app's Play Store link
  
    const handleRateUsPress = async () => {
      const playStoreLink = 'https://play.google.com/store/apps/details?id=com.yourapp';
      try {
        await Linking.openURL(playStoreLink);
      } catch (error) {
        console.error('Error opening the Play Store:', error);
      }
    };
    const handleWhatsAppHelp = () => {
      Linking.openURL('https://wa.me/+263718083975'); // Replace 'yourphonenumber' with your full phone number including country code
    };
    const handleExitPress = () => {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Exit canceled'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: false })
    };
    
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
    <ImageBackground source={require('../assets/images/back.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Title Bar */}
        <View style={styles.titleBar}>
          <Text style={styles.title}>African Apostolic Church Hymns & Books</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="ellipsis-v" size={20} color="#fff" />
          </TouchableOpacity>
        </View>


       {/* Overlay for Greeting Text */}
        
          <Text style={styles.greetingText}>{greeting}, Munhu Washe</Text>
          <Text style={styles.greetingText1}>The African Apostolic Church YavaApostora VeAfrica Hymns.</Text>
     
        {/* Add more components for the main menu here */}
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HymnsList')}>
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
            <Icon name="shopping-cart" size={25} color="#fff" />
            <Text style={styles.buttonText}>Our Shop</Text>
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
    height: 50,
    margin:-4,
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
    backgroundColor: '#434A42',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 20,
    width: '30%',
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
    fontSize: 20,
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
