import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import useCachedResources from './hooks/useCachedResources';


import HomeScreen from './screens/HomeScreen';
import ReportRecordScreen from './screens/ReportRecordScreen'
import { PatrolForms } from './components/PatrolForm'
import ReportFormScreen from './screens/ReportFormScreen'
import { Router, Scene } from 'react-native-router-flux'


const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}
export default function App(props) {

  return (
    <Router>
      <Scene key="root">
        {/* Tab Container */}


        <Scene
          hideNavBar
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#fff' }}
        >
          {/* Tab and it's scenes */}
          <Scene key="home" title="Home" icon={TabIcon}>
            <Scene
              key="home-screen"
              component={HomeScreen}
              title="Home"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="reportRecord" title="Report" icon={TabIcon}>
            <Scene

              key="report-screen"
              component={ReportRecordScreen}
              title="Report"
            />
          </Scene>
        </Scene>
        <Scene
          hideNavBar
          key="modal"
          direction="vertical"
          component={ReportFormScreen}
          title="Modal"

        />

        {/* End Tab Continer */}

      </Scene>
    </Router>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
