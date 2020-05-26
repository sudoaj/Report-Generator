import * as React from "react";
import { StyleSheet, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ReportRecordScreen from "./screens/ReportRecordScreen";
import CompletedReport from "./screens/CompletedReport";
import ReportFormScreen from "./screens/ReportFormScreen";
import { Router, Scene } from "react-native-router-flux";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};
export default class App extends React.Component{
  render(){
    return (
      <Router>
        <Scene key="root">
          {/* Tab Container */}
  
          <Scene
            hideNavBar
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: "#fff" }}
          >
            {/* Tab and it's scenes */}
            <Scene key="home" title="Home" icon={TabIcon}>
              <Scene
                navigationBarStyle={{ backgroundColor: "lightBlue" }}
                key="home-screen"
                component={HomeScreen}
                title="Home"
              />
              <Scene
                navigationBarStyle={{ backgroundColor: "red" }}
                backTitle="Incomplete"
                key="modal"
                direction="vertical"
                component={ReportFormScreen}
                title="Report Form"
              />
            </Scene>
  
            {/* Tab and it's scenes */}
            <Scene key="reportRecord" title="Report" icon={TabIcon}>
              <Scene
                navigationBarStyle={{ backgroundColor: "red" }}
                key="reportScreen"
                component={ReportRecordScreen}
                title="Report"
              />
              <Scene
                key="completedReport"
                direction="vertical"
                component={CompletedReport}
                title="Completed Report"
              />
            </Scene>
          </Scene>
  
          {/* End Tab Continer */}
        </Scene>
      </Router>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
