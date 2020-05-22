import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Title, Subheading, Headline, Card, Button, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();
  return (

    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={styles.header}>
    <Title> Welcome to Code2Gether </Title>
    <Subheading> It's Week 7 </Subheading>
    <View style={styles.container}>
      <Headline> Problem Set 4 is due: </Headline>
      <Headline> May 22nd at 11:59pm</Headline>
      </View>
    </View>


    <View style={styles.container}>
      <OptionButton
        icon="md-compass"
        label="Class Piazza Forum"
        onPress={() => WebBrowser.openBrowserAsync('https://piazza.com/class/')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question in the Chat Rooms"
        onPress={() => navigation.navigate('Chat')}
        isLastOption
      />
      </View>
    </ScrollView>

  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  getStartedText: {
    paddingLeft: 15,
  },
});
