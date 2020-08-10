import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Header from "../../partials/header";
import { Actions } from "react-native-router-flux";

export default class ReportForm extends React.Component {
  state = {
    value: "Note that some props are only available with multiline={true/false}. Additionally, border styles that apply to only one side of the element (e.g., borderBottomColor, borderLeftWidth, etc.) will not be applied if multiline=false. To achieve the same effect, you can wrap your TextInput in a View:",
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Report entry for {time}"} left={() => Actions.pop()} />
        <Text style={styles.topMessageStyle}>Report Started</Text>

        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            margin: 10,
            minHeight: 150,
            maxHeight:200,
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
              fontSize:35
            }}
            multiline
            numberOfLines={1}
            onChangeText={(text) => this.setState({ value: text })}
            value={this.state.value}
            editable
          />
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
});
