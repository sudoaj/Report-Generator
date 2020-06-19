import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import Header from "../../partials/header";
import { Input, ButtonInput, ErrorTxt } from "../../partials/form/input";
import Button from "../../partials/form/button";
import { Actions } from "react-native-router-flux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { Content } from "native-base";

export default class ChatDetails extends React.Component {
  allChats1 = [
    {
      messageContent: "hello man whatsup? ",
      color: "blue",
      time: "2 minutes ago",
      readSatus: true,
    },
  ];
  allChats2 = [
    {
      messageContent: "im fine, the Garden is secured. NO worries",
      color: "blue",
      time: "2 minutes ago",
      readSatus: true,
    },
  ];
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Chat details"} left={() => Actions.pop()} />
        <Text style={styles.topMessageStyle} >Chat Started</Text>
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              style={styles.keyboardAvoidContainer}
              behavior={Platform.OS === "ios" ? "padding" : null}
            >
              <ScrollView style={{ flex: 1 }}>
                {this.allChats1.map(({ messageContent, time, readSatus }) => {
                  return (
                    <View style={styles.messageContent1}>
                      <Text style={styles.messageTextStyle}>
                        {messageContent}
                      </Text>
                      <Text style={styles.timeTextStyle}>{time}</Text>
                    </View>
                  );
                })}
                {this.allChats2.map(({ messageContent, time, readSatus }) => {
                  return (
                    <View style={styles.messageContent2}>
                      <Text style={styles.messageTextStyle}>
                        {messageContent}
                      </Text>
                      <Text style={styles.timeTextStyle}>{time}</Text>
                    </View>
                  );
                })}
              </ScrollView>
              <TextInput
                style={{
                  backgroundColor: "#fafafa",

                  paddingRight: 15,
                  paddingLeft: 15,

                  height: 40,
                  color: "#000",
                }}
                placeholder={"Enter text here"}
              />
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidContainer: {
    flex: 1,
  },
  topMessageStyle: {
    paddingTop: 10,
    color: "#000",
    textAlign: "center",
  },
  messageContent1: {
    backgroundColor: "#2ed397",
    padding: 15,
    marginRight: 100,
    marginLeft: 10,
    margin: 3,
    color: "white",
    flexDirection: "column",
    shadowRadius: 10,
    shadowColor: "#8e8e93",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,
  },
  messageContent2: {
    backgroundColor: "#147efb",
    padding: 15,
    marginLeft: 100,
    marginRight: 10,
    margin: 3,
    color: "white",
    flexDirection: "column",
    shadowRadius: 10,
    shadowColor: "#8e8e93",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,
  },
  messageTextStyle: {
    fontFamily: "GothamBook",
    color: "white",
  },
  timeTextStyle: {
    color: "#fafafa",
    fontSize: 10,
    fontFamily: "GothamLight",
  },
});
