import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { StyleSheet } from "react-native";
import { Root } from "native-base";
import TabIcon from "../../partials/tab-icon";
import { Router, Scene, Stack } from "react-native-router-flux";
import AppHomeScreen from "../../screens/app-home-screen";
import store from "../store";
// Home Screen Import
import SignIn from "../../screens/sign-in";
import ClockIn from "../../screens/clock-in";
import Report from "../../screens/report";
import ReportRecord from "../../screens/report-record";
import Announcements from "../../screens/announcements";
import Chat from "../../screens/chat";
import Documents from "../../screens/documents";
import Emergency from "../../screens/emergency";
import Profile from "../../screens/profile";
import Phonebook from "../../screens/phone-book";
import ChatDetails from "../../screens/chat/chat-details";
import ReportForm from "../../partials/report-box/report-form";

class Routes extends Component {
  state = {
    loaded: true,
    token: store.getState().auth.token,
  };
  render() {
    console.log(this.state.token);
    return (
      <Fragment>
        <Root>
          <Router>
            {/* Root Scene */}
            <Stack key={"root"}>
              <Scene
                initial={true}
                navigationBarStyle={{ backgroundColor: "white" }}
                key="SignInApp"
                component={SignIn}
                hideNavBar
              />
              <Scene key={"Menu"} tabs={true} showLabel={false} hideNavBar>
                {/* Home Tab and it's scenes */}
                <Scene
                  key={"Home"}
                  icon={TabIcon}
                  name={"home"}
                  type={"FontAwesome"}
                >
                  <Scene
                    navigationBarStyle={{ backgroundColor: "white" }}
                    key="AppHomeScreen"
                    component={AppHomeScreen}
                    title="Apphome"
                    hideNavBar
                  />
                  <Scene
                    hideNavBar
                    key="clockIn"
                    direction="vertical"
                    component={ClockIn}
                    title="Clock in"
                  />
                  <Scene
                    hideNavBar
                    key="report"
                    direction="vertical"
                    component={Report}
                    title="Report"
                  />
                  <Scene
                    hideNavBar
                    key="reportForm"
                    component={ReportForm}
                    title="report-form"
                  />
                  <Scene
                    hideNavBar
                    key="report-record"
                    direction="vertical"
                    component={ReportRecord}
                    title="Report"
                  />
                  <Scene
                    hideNavBar
                    key="Announcements"
                    direction="vertical"
                    component={Announcements}
                    title="Announcements"
                  />
                  <Scene
                    hideNavBar
                    key="chat"
                    direction="vertical"
                    component={Chat}
                    title="chat"
                  />

                  <Scene
                    hideNavBar
                    key="chatDetails"
                    component={ChatDetails}
                    title="Chat Details"
                  />

                  <Scene
                    hideNavBar
                    key="documents"
                    direction="vertical"
                    component={Documents}
                    title="documents"
                  />
                  <Scene
                    hideNavBar
                    key="emergency"
                    direction="vertical"
                    component={Emergency}
                    title="emergency"
                  />
                  <Scene
                    hideNavBar
                    key="phonebook"
                    direction="vertical"
                    component={Phonebook}
                    title="phonebook"
                  />
                  <Scene
                    hideNavBar
                    key="profiles"
                    direction="vertical"
                    component={Profile}
                    title="profiles"
                  />
                </Scene>
                {/* Home Tab and it's scenes end */}

                {/* Profile Tab and it's scenes */}
                <Scene
                  key={"profile"}
                  icon={TabIcon}
                  name={"user"}
                  type={"FontAwesome"}
                  component={Profile}
                  hideNavBar
                ></Scene>
                {/* Profile Tab and it's scenes end */}
              </Scene>
            </Stack>
          </Router>
        </Root>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopColor: "rgba(0,0,0,0.09)",
    borderTopWidth: 1,
  },
});

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
