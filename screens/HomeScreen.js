import * as React from "react";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import TopTime from "../components/TopTime";
import IndividualTimeContainer from "../components/IndividualTimeContainer";
import TopInputs from "../components/TopInputs";
import { connect } from "react-redux";
import { setOfficerName } from "../store/officer/actions";
import CompletedReport from "./CompletedReport";

class HomeScreen extends React.Component {
	// static onEnter() {
	// 	console.log("Entering Home");
	// 	Actions.pop(CompletedReport)
	// }
	// static onExit() {
	// 	console.log("Leaving Home");
	// 	Actions.pop(CompletedReport)
	// }
	render() {
		return (
			<View style={styles.container}>
				<TopTime></TopTime>
				<TopInputs></TopInputs>
				<IndividualTimeContainer></IndividualTimeContainer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#fff",
		textAlign: "center",
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
});

const mapStateToProps = (state) => {
	return {
		officerName: state.officer.officerName,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setOfficerName: (officerName) => dispatch(setOfficerName(officerName)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
