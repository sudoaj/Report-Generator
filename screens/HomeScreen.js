import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View, Button, TouchableHighlight, Text } from 'react-native';



import TopTime from '../components/TopTime'


import IndividualTimeContainer from '../components/IndividualTimeContainer'
import TopInputs from '../components/TopInputs'
import StatusBoxes from '../components/StatusBoxes'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopTime></TopTime>
      <TopInputs></TopInputs>
      <StatusBoxes></StatusBoxes>
      <IndividualTimeContainer></IndividualTimeContainer>
      <TouchableHighlight
        style={styles.submit}
        onPress={() => generatReport()}
        underlayColor='#fff'>
        <Text style={styles.submitText}>Generate Report</Text>
      </TouchableHighlight>
    </View>
  );
}
const generatReport=()=>{
  console.log("Hi there");
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  submit: {
    marginRight: 70,
    marginLeft: 70,
    marginTop: 15,
    marginBottom:15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'grey',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  }

});
