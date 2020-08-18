import * as React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../../partials/header";
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
import store from "../../config/store";

 class ReportForm extends React.Component {
  state = {
    value:  this.props.data.text,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={this.props.data.time} left={() => Actions.pop()} />
        <Text style={styles.topMessageStyle}>Report Started</Text>
        <ScrollView>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              margin: 10,
              minHeight: 150,
              maxHeight: 200,
              minWidth: 150,
              shadowRadius: 10,
              shadowColor: "#000",
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.2,
              shadowRadius: 2.65,

              elevation: 8,
            }}
          >
            <View style={styles.genBtnContainer}>
              <TouchableOpacity style={styles.genBtn}>
                <Text>Upload image</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.genBtnContainer}>
              <TouchableOpacity style={styles.genBtn}>
                <Text>Record video/audio</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              margin: 10,
              height: 50,
              minWidth: 150,
              shadowRadius: 10,
              shadowColor: "#000",
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.2,
              shadowRadius: 2.65,

              elevation: 8,
            }}
          >
            <Text
              style={{
                padding: 15,
                fontSize: 20,
              }}
            >
              Media uploaded will be here
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              margin: 10,
              minHeight: 150,
              maxHeight: 100,
              minWidth: 150,
              shadowRadius: 10,
              shadowColor: "#000",
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.2,
              shadowRadius: 2.65,

              elevation: 8,
            }}
          >
            <TextInput
              style={{
                padding: 15,
                fontSize: 20,
              }}
              multiline
              onChangeText={(text) => this.setState({ value: text })}
              value={this.state.value}
              editable
            />
          </View>
        </ScrollView>
        <View style={styles.genBtnContainer}>
          <TouchableOpacity style={styles.genBtn} onPress={() => Actions.pop({value: this.state.value}), console.log(store.getState().report.report)}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topMessageStyle: {
    paddingTop: 10,
    color: "#000",
    textAlign: "center",
  },
  genBtnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  genBtn: {
    width: "80%",
    backgroundColor: "#2ed397",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm);
