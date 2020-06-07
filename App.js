import * as React from "react";
import { Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ReportRecordScreen from "./screens/ReportRecordScreen";
import CompletedReport from "./screens/CompletedReport";
import ReportFormScreen from "./screens/ReportFormScreen";

import { Router, Scene, Actions } from "react-native-router-flux";
import { Provider } from "react-redux";
import store from "./store";

const TabIcon = ({ selected, title }) => {
	return (
		<Text
			style={{
				color: selected ? "red" : "black",
			}}
		>
			{title}{" "}
		</Text>
	);
};

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Scene key="root">
						{/* Tab Container */}
						<Scene
							hideNavBar
							key="tabbar"
							tabs={true}
							tabBarStyle={{ backgroundColor: "#fff" }}
						>
							{/* Home Tab and it's scenes */}
							<Scene key="home" title="Home" icon={TabIcon} tab>
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

							{/* Report Tab and it's scenes */}
							<Scene key="reportRecord" title="Report" icon={TabIcon}>
								<Scene
									navigationBarStyle={{ backgroundColor: "red" }}
									key="reportScreen"
									component={ReportRecordScreen}
									title="Report"
								/>
								
							</Scene>
						</Scene>
						{/* End Tab Continer */}
						<Scene
									key="completedReport"
									direction="vertical"
									component={CompletedReport}
									title="Completed Report"
								/>
					</Scene>
				</Router>
			</Provider>
		);
	}
}
