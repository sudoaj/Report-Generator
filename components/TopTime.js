
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Clock from 'react-live-clock';


export default function TopTime(props) {
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
      <Text style={styles.topTimeText}>{0}{date.getHours()}{":"}{0}{date.getMinutes()}</Text>
      <Text style={styles.bottomTimeText}>{date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>

    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  topTimeText: {
    textAlign: "center",
    fontSize: 60,

  },
  bottomTimeText: {
    textAlign: "center",
    fontSize: 40,

  }

});
