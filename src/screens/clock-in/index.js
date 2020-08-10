import * as React from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import Header from "../../partials/header";
import Button from "../../partials/form/button";
import { Input, ButtonInput, ErrorTxt } from "../../partials/form/input";
import ClockedIn from "./clocked-in";
import ClockedOut from "./clocked-out";
import { Actions } from "react-native-router-flux";
import store from "../../config/store";

export default class ClockIn extends React.Component {
  state = {
    userEmployeeNumber: store.getState().auth.userprofile.employee_number,
    clockedInVisible: false,
    clockedOutVisible: false,
  };
  handleClockIn = (hi) => {
    this.setState({ clockedInVisible: true });
    // Actions.clockedOut();
    console.log(this.state.userEmployeeNumber, "clocked in");
  };
  handleClockOut = () => {
    this.setState({ clockedOutVisible: true });
    // Actions.clockedin();
    console.log("clocked out");
  };

  done = (clockedScreen) => {
    this.setState({ [clockedScreen]: false });
    Actions.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Clock in/out"} left={() => Actions.pop()} />
        <View>
          <Input
            value={this.state.userEmployeeNumber}
            name={"employeeNumber"}
            label={"Employee Number"}
            capitalize={"none"}
            change={() => {}}
            type={"number-pad"}
            placeholder={"Enter Your employee number"}
          />

          <View style={styles.buttonWrap}>
            <Button
              shadow
              title={"CLOCK IN"}
              loading={false}
              disabled={false}
              press={() => {
                this.handleClockIn();
              }}
            />
          </View>
          <View style={styles.buttonWrap}>
            <Button
              background="red"
              shadow
              title={"CLOCK OUT"}
              loading={false}
              disabled={false}
              press={() => {
                this.handleClockOut();
              }}
            />
          </View>
        </View>
        <ClockedIn
          userEmployeeNumber={this.state.userEmployeeNumber}
          visible={this.state.clockedInVisible}
          close={() => this.done("clockedInVisible")}
        />
        <ClockedOut
          userEmployeeNumber={this.state.userEmployeeNumber}
          visible={this.state.clockedOutVisible}
          close={() => this.done("clockedOutVisible")}
        />
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
});
