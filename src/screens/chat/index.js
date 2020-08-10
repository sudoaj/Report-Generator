
import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "../../partials/header";
import { ListItem } from "react-native-elements";

import { Input, ButtonInput, ErrorTxt } from "../../partials/form/input";
import { Actions } from "react-native-router-flux";
export default class Chat extends React.Component {
  chatList = [
    {
      name: "Saheed Muslim",
      lasMessage: "I am fine hby?",
      time: "now",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      chatDetailsMessage: [
        { "hi there": "whatsup" },
        { "hi there": "whatsup" },
      ],
    },
    {
      name: "Shakira",
      lasMessage: "I am fine hby?",
      time: "59 minutes ago",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Saheed Muslim",
      lasMessage: "I am fine hby?",
      time: "now",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Saheed Muslim",
      lasMessage: "I am fine hby?",
      time: "1 year ago",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    }
  ];

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Chat"} left={() => Actions.pop()} />

        <ScrollView>
          {this.chatList.map(({ name, lasMessage, time, image }) => {
            return (
              <ListItem
                onPress={Actions.chatDetails}
                leftAvatar={{
                  title: "{image}",
                  source: {
                    uri: image,
                  },
                  showAccessory: false,
                }}
                title={name}
                subtitle={lasMessage}
                rightTitle={time}
                titleStyle={styles.title}
                rightTitleStyle={styles.rightTitle}
                subtitleStyle={styles.subtitle}
                chevron
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonWrap: {
    margin: 5,
  },

  title: {
    fontFamily: "GothamBold",
  },
  subtitle: {
    fontFamily: "GothamLight",
    fontSize: 15,
  },
  rightTitle: {
    fontSize: 10,
  },
});
