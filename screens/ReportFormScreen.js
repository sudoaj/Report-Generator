import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View, Button, TouchableHighlight, Text } from 'react-native';



import TopTime from '../components/TopTime'
import TopInputs from '../components/TopInputs'
import PatrolForms from '../components/PatrolForm'


export default function ReportFormScreen() {
  return (
    <View style={styles.container}>
      <TopTime></TopTime>
      
      <TopInputs></TopInputs>
      <PatrolForms></PatrolForms>
    <View>
      <TouchableHighlight
        style={styles.submit1}
        onPress={() => generatReport()}
        underlayColor='#fff'>
        <Text style={styles.submitText}>Generate Report</Text>
      </TouchableHighlight>
      </View>
      <View>
      <TouchableHighlight
        style={styles.submit1}
        onPress={() => generatReport()}
        underlayColor='#fff'>
        <Text style={styles.submitText}>Generate Report</Text>
      </TouchableHighlight>
      </View>
      </View>

  );
}
const generatReport=()=>{
  console.log("Hi there");
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center'
  },
 
  submit1: {
    marginRight: 100,
    marginLeft: 100,
    marginTop: 5,
    marginBottom:5,
    paddingTop: 10,
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
