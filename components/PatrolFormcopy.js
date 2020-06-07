import React from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	TouchableHighlight,
} from "react-native";
import { connect } from "react-redux";
import { CheckBox } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
	setTimeSlotName,
	setTimeSlotColor,
	setPatrolState,
	setPatrolNote,
	setLockedDoorState,
	setLockedDoorNote,
	setUnlockedDoorState,
	setUnlockedDoorNote,
	setMonitoredCameraState,
	setMonitoredCameraNote,
	setSecurityRiskState,
	setSecurityRiskNote,
	setExtraNoteState,
	setExtraNoteNote,
	setAttachedFileState,
	setAttachedFileNote,
} from "../store/timeslot/actions";
import { Actions } from "react-native-router-flux";

class PatrolForms extends React.Component {
	componentDidMount = () => {
		this.props.setTimeSlotName("1900");
		this.props.setTimeSlotColor("green");
	};
	render() {
		return (
			<KeyboardAwareScrollView>
				<Text style={styles.hourName}>{this.props.timeSlotName}</Text>
				<View style={styles.container}>
					<CheckBox
						checkedColor="blue"
						uncheckedColor="red"
						title="Patrol"
						checked={this.props.patrolState}
						onPress={() => this.props.setPatrolState(!this.props.patrolState)}
					/>
					<View style={styles.textAreaContainer}>
						<TextInput
							style={styles.textArea}
							underlineColorAndroid="transparent"
							placeholder="Type something"
							placeholderTextColor="grey"
							numberOfLines={5}
							multiline={true}
							value={this.props.patrolNote}
							onChangeText={(text) => this.props.setPatrolNote(text)}
						/>
					</View>
				</View>
				<View style={styles.container}>
					<TouchableHighlight
						style={styles.submit1}
						onPress={() => Actions.pop()}
						underlayColor="#fff"
					>
						<Text style={styles.submitText}>Save As Incomplete</Text>
					</TouchableHighlight>
				</View>
				<View>
					<TouchableHighlight
						style={styles.submit2}
						onPress={() => Actions.pop()}
						underlayColor="#fff"
					>
						<Text style={styles.submitText2}>Save Hour</Text>
					</TouchableHighlight>
				</View>
			</KeyboardAwareScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
	},
	textAreaContainer: {
		borderColor: "lightgrey",
		borderWidth: 1,
		padding: 5,
		marginBottom: 15,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: "lightgrey",
	},
	textArea: {
		color: "#000",
		height: 50,
		justifyContent: "flex-start",
	},
	submit1: {
		marginRight: 100,
		marginLeft: 100,
		marginTop: 5,
		marginBottom: 5,
		paddingTop: 10,
		paddingBottom: 15,
		backgroundColor: "#fff200",
		borderRadius: 50,
		borderWidth: 1,
		borderColor: "#fff",
	},
	submit2: {
		marginRight: 100,
		marginLeft: 100,
		marginTop: 5,
		marginBottom: 5,
		paddingTop: 10,
		paddingBottom: 15,
		backgroundColor: "blue",
		borderRadius: 50,
		borderWidth: 1,
		borderColor: "#fff",
	},
	submitText: {
		fontSize: 20,
		color: "#000",
		textAlign: "center",
	},
	submitText2: {
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
	},
	hourName: {
		fontSize: 30,
		color: "black",
		textAlign: "center",
		fontWeight: "bold",
	},
});
const mapStateToProps = (state) => {
	return {
		timeSlotName: state.timeslot.timeSlotName,
		patrolState: state.timeslot.patrolState,
		patrolNote: state.timeslot.patrolNote,
		lockedDoorstate: state.timeslot.lockedDoorstate,
		lockedDoorNote: state.timeslot.lockedDoorNote,
		unlockedDoorState: state.timeslot.unlockedDoorState,
		unlockedDoorNote: state.timeslot.unlockedDoorNote,
		monitoredCameraState: state.timeslot.monitoredCameraState,
		monitoredCameraNote: state.timeslot.monitoredCameraNote,
		securityRiskState: state.timeslot.securityRiskState,
		securityRiskNote: state.timeslot.securityRiskNote,
		extraNoteState: state.timeslot.extraNoteState,
		extraNotesNote: state.timeslot.extraNotesNote,
		attachedFileState: state.timeslot.attachedFileState,
		attachedFileNote: state.timeslot.attachedFileNote,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTimeSlotName: (timeSlotName) => dispatch(setTimeSlotName(timeSlotName)),
		setTimeSlotColor: (timeSlotColor) =>
			dispatch(setTimeSlotColor(timeSlotColor)),
		setPatrolState: (patrolState) => dispatch(setPatrolState(patrolState)),
		setPatrolNote: (patrolNote) => dispatch(setPatrolNote(patrolNote)),
		setLockedDoorState: (lockedDoorstate) =>
			dispatch(setLockedDoorState(lockedDoorstate)),
		setLockedDoorNote: (lockedDoorNote) =>
			dispatch(setLockedDoorNote(lockedDoorNote)),
		setUnlockedDoorState: (unlockedDoorState) =>
			dispatch(setUnlockedDoorState(unlockedDoorState)),
		setUnlockedDoorNote: (unlockedDoorNote) =>
			dispatch(setUnlockedDoorNote(unlockedDoorNote)),
		setMonitoredCameraState: (monitoredCameraState) =>
			dispatch(setMonitoredCameraState(monitoredCameraState)),
		setMonitoredCameraNote: (monitoredCameraNote) =>
			dispatch(setMonitoredCameraNote(monitoredCameraNote)),
		setSecurityRiskState: (securityRiskState) =>
			dispatch(setSecurityRiskState(securityRiskState)),
		setSecurityRiskNote: (securityRiskNote) =>
			dispatch(setSecurityRiskNote(securityRiskNote)),
		setExtraNoteState: (extraNoteState) =>
			dispatch(setExtraNoteState(extraNoteState)),
		setExtraNoteNote: (extraNotesNote) =>
			dispatch(setExtraNoteNote(extraNotesNote)),
		setAttachedFileState: (attachedFileState) =>
			dispatch(setAttachedFileState(attachedFileState)),
		setAttachedFileNote: (attachedFileNote) =>
			dispatch(setAttachedFileNote(attachedFileNote)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PatrolForms);
