
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text,  } from 'react-native';



export default function TopInputs(props) {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
    
      return function cleanup() {
          clearInterval(timerID);
        };
     });
     function tick() {
      setDate(new Date());
     }
  

    return (
        
        <View style={styles.container}>
            <View>

            <TextInput
                style={styles.NameText}
                editable={true}
            >AJAYI ABDULSALAM
            </TextInput>

           
            <TextInput
                style={styles.NameText}
                editable={false}
            >Atlanta Botanical Garden
            </TextInput>
            </View>
            
           <View>
            

            <TextInput
                style={styles.NameText}
                editable={false}
            >{date.toLocaleDateString()}
            </TextInput>
            <TextInput
                style={styles.NameText}
                editable={false}
            >
                1900 - 0700
            </TextInput>   
            </View>        
        </View>


    );

}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 1,

        backgroundColor: '#fff',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',

    },
   NameText: {
        textAlign: "left",
        borderRadius: 5,
        borderWidth: 1,
        padding: 5,
        borderColor: 'black',
        margin: 10,
        fontSize: 20,

    },

});
