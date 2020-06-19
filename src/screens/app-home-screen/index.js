import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import WavyHeader from "../../partials/wavy-header";
import HomeBox from "../../partials/home-box";
import { Avatar, Badge } from "react-native-elements";
import { Actions } from "react-native-router-flux";

export default class AppHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WavyHeader
          customStyles={styles.svgCurve}
          customHeight={160}
          customTop={130}
          customBgColor="#2ed397"
          customWavePattern="M0,160L34.3,181.3C68.6,203,137,245,206,240C274.3,235,343,181,411,154.7C480,128,549,128,617,144C685.7,160,754,192,823,218.7C891.4,245,960,267,1029,277.3C1097.1,288,1166,288,1234,288C1302.9,288,1371,288,1406,288L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hello, {"Ajayi"}</Text>
          <Text style={styles.headerText2}>{"#5121"}</Text>
        </View>
        <TouchableHighlight onPress={() => Actions.profiles({ left: true })}>
          <View style={styles.headerNotification}>
            <Avatar
              rounded
              source={{
                uri: "https://randomuser.me/api/portraits/women/6.jpg",
              }}
              size="medium"
            />
            <Badge
              value={5}
              status="error"
              containerStyle={{ position: "absolute", top: -7, right: -5 }}
            />
          </View>
        </TouchableHighlight>
        <ScrollView>
          <View style={styles.boxContainer}>
            <HomeBox
              customBgColor="white"
              content="Clock in/out"
              iconName="md-log-in"
              actionOnPress={Actions.clockIn}
            ></HomeBox>
            <HomeBox
              customBgColor="white"
              content="Report"
              iconName="md-book"
              actionOnPress={Actions.report}
            ></HomeBox>
            <HomeBox
              customBgColor="white"
              content="Announcements"
              iconName="md-megaphone"
              actionOnPress={Actions.Announcements}
            ></HomeBox>
            <HomeBox
              customBgColor="white"
              content="Chat"
              iconName="md-chatboxes"
              actionOnPress={Actions.chat}
            ></HomeBox>
            <HomeBox
              customBgColor="white"
              content="Documents"
              iconName="md-paper"
              actionOnPress={Actions.documents}
            ></HomeBox>
           
             <HomeBox
              customBgColor="white"
              content="Phone book"
              iconName="md-call"
              actionOnPress={Actions.phonebook}
            ></HomeBox>
             <HomeBox
              customBgColor="white"
              content="Emergency"
              iconName="md-alert"
              iconColor="red"
              actionOnPress={Actions.emergency}
            ></HomeBox>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    flex: 1,
    flexWrap: "wrap",
    padding: 10,
    marginTop: 50,
    margin: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },
  submit: {
    marginRight: 70,
    marginLeft: 70,
    marginTop: 15,
    marginBottom: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "grey",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
  submitText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    padding: 10,
    marginTop: 60,
    elevation: 8,
  },
  headerText2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    padding: 10,
    paddingTop: -2,

    elevation: 8,
  },
  headerNotification: {
    marginTop: -60,
    marginRight: 20,
    flex: 1,
    alignSelf: "flex-end",
  },
});
