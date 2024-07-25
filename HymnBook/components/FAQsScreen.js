import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const FAQsScreen = ({ navigation }) => {
  // Sample FAQ data
  const faqs = [
    { question: "What is the AAC HYMNS Application?", answer: "The AAC HYMNS Application is a comprehensive collection of hymns for The African Apostolic Church. It provides easy access to hymns in multiple languages." },
    { question: "How do I use the app?", answer: "You can navigate through the app using the main menu. Select a language or category to view the available hymns." },
    { question: "Do I need an internet connection?", answer: "No, the app is designed to work offline. Once hymns are downloaded, you can access them without an internet connection." },
    { question: "How can I provide feedback?", answer: "You can provide feedback by contacting us through the 'About' page or sending an email to kchiyaka1@gmail.com." },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          
          <Text style={styles.title}>    Frequently Asked Questions?</Text>
        </View>

        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqContainer}>
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.answer}>{faq.answer}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 18,
    color: '#007BFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  faqContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default FAQsScreen;
