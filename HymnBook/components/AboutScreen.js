import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,Image, TouchableOpacity,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AboutScreen = ({ navigation }) => {

    const handleEmailPress = () => {
        Linking.openURL('mailto:kchiyaka1@gmail.com');
      };
      const handleWhatsAppPress = () => {
        Linking.openURL('https://wa.me/+263718083975'); // Replace 'yourphonenumber' with your full phone number including country code
      };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>                 The African Apostolic Church</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
           {/* Title<Icon name="arrow-left" size={20} color="#fff" /> Bar */} 
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        >
        <Text style={styles.sectionTitle}>About the Church</Text>
          <Text style={styles.sectionText}>
          The African Apostolic Church was founded in 1959 by Archbishop Ernest Paul Mwazha, who received a calling from God in 1951. The church's name was revealed by the Holy Spirit in 1957, and its mission is to spread the Gospel of Jesus Christ to the whole world, regardless of race or background. The church is guided by the Holy Spirit and aims to help people rediscover their lost culture and adhere to one God. Archbishop Mwazha had several encounters with Jesus Christ, starting from 1934, which prepared him for his commission to lead the church.
          </Text>
          <Text style={styles.sectionTitle}>About this Application</Text>
          <Text style={styles.sectionText}>
            AAC HYMNS Application is a comprehensive collection of hymns for The African Apostolic Church. This app provides easy access to hymns in multiple languages and offers a user-friendly interface for worship and devotion.
          </Text>
          <Text style={styles.sectionText}>
           This Application AAC Hymns was proudly designed by Kudakwashe Chiyaka.
          </Text>

          <Text style={styles.sectionTitle}>Credits</Text>
          <Text style={styles.sectionText}>
            Inspired By: Linnorm Group Pvt Ltd.
              </Text>
            <Text style={styles.sectionText}>
            Design: Kudakwashe Chiyaka 
          </Text>
          <Text style={styles.sectionText}>
            Programming: Kudakwashe Chiyaka 
          </Text>

          <Text style={styles.sectionTitle}>Contact Information</Text>
          <TouchableOpacity onPress={handleEmailPress}>
          <Text style={[styles.sectionText, styles.link]}>
            Email: kchiyaka1@gmail.com
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWhatsAppPress}>
          <Text style={[styles.sectionText, styles.link]}>
            WhatsApp: +263 71 808 3975
          </Text>
        </TouchableOpacity>

          <Text style={styles.sectionTitle}>Version Information</Text>
          <Text style={styles.sectionText}>
            Version: 1.0.0
            Last updated: July 2024
          </Text>
          <Text style={styles.sectionTitle}>Terms of Service</Text>
          <Text style={styles.sectionText}>
          Welcome to the African Apostolic Church Hymns Application. These Terms of Service ("Terms") govern your use of our app. By using our app, you agree to these Terms. If you do not agree, please do not use the app.
          </Text>
          <Text style={styles.sectionTerms}>Use of App</Text>
          <Text style={styles.sectionText}>
          The app is for personal use only.
          </Text>
          <Text style={styles.sectionText}>
          You must not use the app for any unlawful or prohibited purpose.
          </Text>
          <Text style={styles.sectionTerms}>Intellectual Property</Text>
          <Text style={styles.sectionText}>
          All content and materials in the app are owned by or licensed the African Apostolic Church.
          </Text>
          <Text style={styles.sectionText}>
          You may not reproduce, distribute, or create derivative works from any content in the app without permission.
          </Text>
          <Text style={styles.sectionTerms}>Disclaimer of Warranties</Text>
          <Text style={styles.sectionText}>
          The app is provided "as is" without warranties of any kind.
          </Text>
          <Text style={styles.sectionText}>
           I do not guarantee that the app will be error-free or uninterrupted.
          </Text>
          <Text style={styles.sectionText}>
            I am not liable for any indirect, incidental, or consequential damages arising from your use of the app.
          </Text>
          <Text style={styles.sectionTerms}>Get in Touch</Text>
          <Text style={styles.sectionText}>
          For questions about these Terms, please contact us at [kchiyak1@gmail.com].
          </Text>
          <Text style={styles.sectionTitle}>Licenses</Text>
          <Text style={styles.sectionText}>
          All third-party trademarks and logos used in the app are the property of their respective owners.
          </Text>
          <Text style={styles.sectionText}>
            © Kudakwashe Chiyaka• © The African Apostolic Church 2024
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 20, // Adjust margin as needed
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    padding: 10,
    paddingBottom: 30,
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  sectionTerms:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default AboutScreen;
