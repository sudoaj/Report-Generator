import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	TouchableHighlight,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Actions } from "react-native-router-flux";
import { initialData } from "./IndividualTimeContainer";

export default function PatrolForms(props) {
	const [FormName] = useState(props.formData.name);
	const [Patrol, setPatrol] = useState(props.formData.patrolState);
	const [PatrolNotes, setPatrolNotes] = useState(props.formData.patrolNotes);

	const [LockedDoors, setLockedDoors] = useState(
		props.formData.lockedDoorState
	);
	const [LockedDoorsNotes, setLockedDoorsNotes] = useState(
		props.formData.lockedDoorNotes
	);

	const [UnLockedDoors, setUnLockedDoors] = useState(
		props.formData.unlockedDoorState
	);
	const [UnLockedDoorsNotes, setUnLockedDoorsNotes] = useState(
		props.formData.unlockedDoorNotes
	);

	const [MonitoredCamera, setMonitoredCamera] = useState(
		props.formData.monitoredCameraState
	);
	const [MonitoredCameraNotes, setMonitoredCameraNotes] = useState(
		props.formData.monitoredCameraNote
	);

	const [SecurityRisk, setSecurityRisk] = useState(
		props.formData.securityRiskState
	);
	const [SecurityRiskNotes, setSecurityRiskNotes] = useState(
		props.formData.securityRiskNote
	);

	const [ExtraNotes, setExtraNotes] = useState(props.formData.extraNoteState);
	const [ExtraNotesNotes, setExtraNotesNotes] = useState(
		props.formData.extraNoteNote
	);

	const [AttachedFile, setAttachedFile] = useState(
		props.formData.attachedFileState
	);
	const [AttachedFileNotes, setAttachedFileNotes] = useState(
		props.formData.attachedFileStateNote
	);

	const onsaveAsIncomplete = () => {
		initialData.formData[props.formIndex].patrolState = Patrol;
		initialData.formData[props.formIndex].patrolNotes = PatrolNotes;
		initialData.formData[props.formIndex].lockedDoorState = LockedDoors;
		initialData.formData[props.formIndex].lockedDoorNotes = LockedDoorsNotes;

		initialData.formData[props.formIndex].unlockedDoorState = UnLockedDoors;
		initialData.formData[
			props.formIndex
		].unlockedDoorNotes = UnLockedDoorsNotes;

		initialData.formData[
			props.formIndex
		].monitoredCameraState = MonitoredCamera;
		initialData.formData[
			props.formIndex
		].monitoredCameraNote = MonitoredCameraNotes;
		initialData.formData[props.formIndex].securityRiskState = SecurityRisk;
		initialData.formData[props.formIndex].securityRiskNote = SecurityRiskNotes;
		initialData.formData[props.formIndex].extraNoteState = ExtraNotes;
		initialData.formData[props.formIndex].extraNoteNote = ExtraNotesNotes;
		initialData.formData[props.formIndex].attachedFileState = AttachedFile;
		initialData.formData[
			props.formIndex
		].attachedFileStateNote = AttachedFileNotes;
		onsaveForTheHour();
		Actions.pop();
	};
	const allOfIt = JSON.stringify({
		FormName,
		Patrol,
		PatrolNotes,
		LockedDoors,
		LockedDoorsNotes,
		UnLockedDoors,
		UnLockedDoorsNotes,
		SecurityRisk,
		SecurityRiskNotes,
		ExtraNotes,
		ExtraNotesNotes,
		AttachedFile,
		AttachedFileNotes,
	});

	const onsaveForTheHour = () => {
		console.log(allOfIt);
		Actions.pop();
	};
	return (
		<KeyboardAwareScrollView>
			<Text style={styles.hourName}>{FormName}</Text>
			<View style={styles.container}>
				<CheckBox
					checkedColor="blue"
					uncheckedColor="red"
					title="Patrol"
					checked={Patrol}
					onPress={() => setPatrol(!props.formData.patrolState)}
				/>
				<View style={styles.textAreaContainer}>
					<TextInput
						style={styles.textArea}
						underlineColorAndroid="transparent"
						placeholder="Type something"
						placeholderTextColor="grey"
						numberOfLines={5}
						multiline={true}
						value={PatrolNotes}
						onChangeText={(text) => setPatrolNotes(text)}
					/>
				</View>
				<CheckBox
					checkedColor="blue"
					uncheckedColor="red"
					title="Locked Doors"
					checked={LockedDoors}
					onPress={() => setLockedDoors(!props.formData.lockedDoorState)}
				/>
				<View style={styles.textAreaContainer}>
					<TextInput
						style={styles.textArea}
						underlineColorAndroid="transparent"
						placeholder="Type something"
						placeholderTextColor="grey"
						numberOfLines={5}
						multiline={true}
						value={LockedDoorsNotes}
						onChangeText={(text) => setLockedDoorsNotes(text)}
					/>
				</View>
				<CheckBox
					checkedColor="blue"
					uncheckedColor="red"
					title="Unlocked Doors"
					checked={UnLockedDoors}
					onPress={() => setUnLockedDoors(!props.formData.unlockedDoorState)}
				/>
				<View style={styles.textAreaContainer}>
					<TextInput
						style={styles.textArea}
						underlineColorAndroid="transparent"
						placeholder="Type something"
						placeholderTextColor="grey"
						numberOfLines={5}
						multiline={true}
						value={UnLockedDoorsNotes}
						onChangeText={(text) => setUnLockedDoorsNotes(text)}
					/>
				</View>
				<CheckBox
					checkedColor="blue"
					uncheckedColor="red"
					title="Monitored Camera"
					checked={MonitoredCamera}
					onPress={() =>
						setMonitoredCamera(!props.formData.monitoredCameraState)
					}
				/>
				<View style={styles.textAreaContainer}>
					<TextInput
						style={styles.textArea}
						underlineColorAndroid="transparent"
						placeholder="Type something"
						placeholderTextColor="grey"
						numberOfLines={5}
						multiline={true}
						value={MonitoredCameraNotes}
						onChangeText={(text) => setMonitoredCameraNotes(text)}
					/>
				</View>
				<CheckBox
					checkedColor="blue"
					uncheckedColor="red"
					title="No Security Risk, All CLear for the Hour"
					checked={SecurityRisk}
					onPress={() => setSecurityRisk(!props.formData.securityRiskState)}
				/>
				<View style={styles.textAreaContainer}>
					<TextInput
						style={styles.textArea}
						underlineColorAndroid="transparent"
						placeholder="Type something"
						placeholderTextColor="grey"
						numberOfLines={5}
						multiline={true}
						value={SecurityRiskNotes}
						onChangeText={(text) => setSecurityRiskNotes(text)}
					/>
				</View>
				<CheckBox
					checkedColor="blue"
					uncheckedColor="red"
					title="Extra Notes"
					checked={ExtraNotes}
					onPress={() => setExtraNotes(!props.formData.extraNoteState)}
				/>
				<View style={styles.textAreaContainer}>
					<TextInput
						style={styles.textArea}
						underlineColorAndroid="transparent"
						placeholder="Type something"
						placeholderTextColor="grey"
						numberOfLines={5}
						multiline={true}
						value={ExtraNotesNotes}
						onChangeText={(text) => setExtraNotesNotes(text)}
					/>
				</View>
				<CheckBox
					checkedColor="blue"
					uncheckedColor="red"
					title="Attached Files"
					checked={AttachedFile}
					onPress={() => setAttachedFile(!props.formData.attachedFileState)}
				/>
				<View style={styles.textAreaContainer}>
					<TextInput
						style={styles.textArea}
						underlineColorAndroid="transparent"
						placeholder="Type something"
						placeholderTextColor="grey"
						numberOfLines={5}
						multiline={true}
						value={AttachedFileNotes}
						onChangeText={(text) => setAttachedFileNotes(text)}
					/>
				</View>
			</View>
			<View style={styles.container}>
				<TouchableHighlight
					style={styles.submit1}
					onPress={() => onsaveAsIncomplete()}
					underlayColor="#fff"
				>
					<Text style={styles.submitText}>Save As Incomplete </Text>
				</TouchableHighlight>
			</View>
			<View>
				<TouchableHighlight
					style={styles.submit2}
					onPress={() => onsaveForTheHour()}
					underlayColor="#fff"
				>
					<Text style={styles.submitText2}>Save Hour</Text>
				</TouchableHighlight>
			</View>
		</KeyboardAwareScrollView>
	);
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
