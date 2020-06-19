import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { StyleSheet } from "react-native";
import { Root } from "native-base";
import TabIcon from "../../partials/tab-icon";
import { Router, Scene, Stack } from "react-native-router-flux";
import AppHomeScreen from "../../screens/app-home-screen";
import ReportFormScreen from "../../screens/report-form";
import ReportRecordScreen from "../../screens/report-record";
import CompletedReport from "../../screens/completed-report";

// Home Screen Import
import ClockIn from "../../screens/clock-in";
import Report from "../../screens/report";
import Announcements from "../../screens/announcements";
import Chat from "../../screens/chat";
import Documents from "../../screens/documents";
import Emergency from "../../screens/emergency";
import Profile from "../../screens/profile";
import Phonebook from "../../screens/phone-book"
import ChatDetails from "../../screens/chat/chat-details";

class Routes extends Component {
  state = {
    loaded: true,
  };
  render() {
    return (
      <Fragment>
        <Root>
          <Router>
            {/* Root Scene */}
            <Stack key={"root"}>
              <Scene
                key={"Menu"}
                tabs={true}
                showLabel={false}
                initial={true}
                hideNavBar
              >
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
                    title="Sign in"
                  />
                  <Scene
                    hideNavBar
                    key="report"
                    direction="vertical"
                    component={Report}
                    title="Sign in"
                  />
                  <Scene
                    hideNavBar
                    key="Announcements"
                    direction="vertical"
                    component={Announcements}
                    title="Sign in"
                  />
                  <Scene
                    hideNavBar
                    key="chat"
                    direction="vertical"
                    component={Chat}
                    title="Sign in"
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
