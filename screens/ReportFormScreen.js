import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View, Button, TouchableHighlight, Text, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import PatrolForms from '../components/PatrolForm'


export default function ReportFormScreen() {
  return (
    <View style={styles.container}>
<Text style={[{fontSize:50}, {textAlign:'center'}]}>1900</Text>
      <PatrolForms></PatrolForms>
    <View>
      <TouchableHighlight
        style={styles.submit1}
        onPress={() => generatReport()}
        underlayColor='#fff'>
        <Text style={styles.submitText}>Save As Incomplete </Text>
      </TouchableHighlight>
      </View>
      <View>
      <TouchableHighlight
        style={styles.submit2}
        onPress={() => generatReport()}
        underlayColor='#fff'>
        <Text style={styles.submitText2}>Save Hour</Text>
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
    backgroundColor: '#fff200',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submit2: {
    marginRight: 100,
    marginLeft: 100,
    marginTop: 5,
    marginBottom:5,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: 'blue',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  }
  ,
  submitText2: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  }

});
