
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function PatrolForms(props) {
    const [Patrol, setPatrol] = useState(false);
    const [LockedDoors, setLockedDoors] = useState(false);
    const [UnLockedDoors, setUnLockedDoors] = useState(false);
    const [MonitoredCamera, setMonitoredCamera] = useState(false);
    const [SecurityRisk, setSecurityRisk] = useState(false);
    const [ExtraNotes, setExtraNotes] = useState(false);
    const [AttachedFile, setAttachedFile] = useState(false);




    return (
        <KeyboardAwareScrollView>


        <View style={styles.container}>
            <CheckBox
                checkedColor='blue'
                uncheckedColor='red'
                title='Patrol'
                checked={Patrol}
                onPress={() => setPatrol(!Patrol)}
            />
            <View style={styles.textAreaContainer} >
            <TextInput
               style={styles.textArea}
               underlineColorAndroid="transparent"
               placeholder="Type something"
               placeholderTextColor="grey"
               numberOfLines={5}
               multiline={true}
                />
                </View>
            <CheckBox
                checkedColor='blue'
                uncheckedColor='red'
                title='Locked Doors'
                checked={LockedDoors}
                onPress={() => setLockedDoors(!LockedDoors)}

            />
            <View style={styles.textAreaContainer} >
            <TextInput
               style={styles.textArea}
               underlineColorAndroid="transparent"
               placeholder="Type something"
               placeholderTextColor="grey"
               numberOfLines={5}
               multiline={true}
                />
                </View>
            <CheckBox
                checkedColor='blue'
                uncheckedColor='red'
                title='Unlocked Doors'
                checked={UnLockedDoors}
                onPress={() => setUnLockedDoors(!UnLockedDoors)}
            />
            <View style={styles.textAreaContainer} >
            <TextInput
               style={styles.textArea}
               underlineColorAndroid="transparent"
               placeholder="Type something"
               placeholderTextColor="grey"
               numberOfLines={5}
               multiline={true}
                />
                </View>
            <CheckBox
                checkedColor='blue'
                uncheckedColor='red'
                title='Monitored Camera'
                checked={MonitoredCamera}
                onPress={() => setMonitoredCamera(!MonitoredCamera)}
            />
            <View style={styles.textAreaContainer} >
            <TextInput
               style={styles.textArea}
               underlineColorAndroid="transparent"
               placeholder="Type something"
               placeholderTextColor="grey"
               numberOfLines={5}
               multiline={true}
                />
                </View>
            <CheckBox
                checkedColor='blue'
                uncheckedColor='red'
                title='No Security Risk, All CLear for the Hour'
                checked={SecurityRisk}
                onPress={() => setSecurityRisk(!SecurityRisk)}
            />
            <View style={styles.textAreaContainer} >
            <TextInput
               style={styles.textArea}
               underlineColorAndroid="transparent"
               placeholder="Type something"
               placeholderTextColor="grey"
               numberOfLines={5}
               multiline={true}
                />
                </View>
            <CheckBox
                checkedColor='blue'
                uncheckedColor='red'
                title='Extra Notes'
                checked={ExtraNotes}
                onPress={() => setExtraNotes(!ExtraNotes)}
            />
            <View style={styles.textAreaContainer} >
            <TextInput
               style={styles.textArea}
               underlineColorAndroid="transparent"
               placeholder="Type something"
               placeholderTextColor="grey"
               numberOfLines={5}
               multiline={true}
                />
                </View>
            <CheckBox
                checkedColor='blue'
                uncheckedColor='red'
                title='Attached Files'
                checked={AttachedFile}
                onPress={() => setAttachedFile(!AttachedFile)}
            />
            <View style={styles.textAreaContainer} >
            <TextInput
               style={styles.textArea}
               underlineColorAndroid="transparent"
               placeholder="Type something"
               placeholderTextColor="grey"
               numberOfLines={5}
               multiline={true}
                />
                </View>
        </View>
        </KeyboardAwareScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',

    },
    textAreaContainer: {

      borderColor: 'lightgrey',
      borderWidth: 1,
      padding: 5,
      marginBottom:15,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'lightgrey'

    },
    textArea: {
        color:'#000',
      height: 50,
      justifyContent: "flex-start"
    }
  })