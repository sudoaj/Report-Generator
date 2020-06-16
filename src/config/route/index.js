import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Root } from "native-base";
import TabIcon from "../../partials/tab-icon";
import { Router, Scene, Stack, Actions } from "react-native-router-flux";
import HomeScreen from "../../screens/HomeScreen";
import ReportFormScreen from "../../screens/ReportFormScreen";
import ReportRecordScreen from "../../screens/ReportRecordScreen";
import CompletedReport from "../../screens/CompletedReport";


class Routes extends Component {
  state = {
    loaded: true,
  };
  componentDidMount() {}

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
                    key="home-screen"
                    component={HomeScreen}
                    title="Home"
                  />
                  <Scene
                    hideBackImage
                    hideNavBar
                    hideTabBar
                    gesturesEnabled={false}
                    navigationBarStyle={{ backgroundColor: "red" }}
                    key="modal"
                    component={ReportFormScreen}
                    title="Report Forms"
                  />
                </Scene>

                <Scene
                  key={"ReportRecord"}
                  icon={TabIcon}
                  name={"book"}
                  type={"FontAwesome"}
                  component={ReportRecordScreen}
                >
                  <Scene
                    navigationBarStyle={{ backgroundColor: "red" }}
                    key="reportScreen"
                    component={ReportRecordScreen}
                    title="Report"
                  />
                </Scene>
              </Scene>
              <Scene
                key="completedReport"
                direction="vertical"
                component={CompletedReport}
                title="Completed Report"
              />
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
