import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IndividualTimeButton from "./IndividualTimeButton";
import { Actions } from "react-native-router-flux";

export let initialData = {
	officerName: "AJAYI",
	date: Date.now(),
	timeInterval: "0900-0700",
	totalTime: 4,
	formData: [
		{
			name: "09:00",
			color: "#a1160d",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			name: "10:00",
			color: "#bdbdbd",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			name: "11:00",
			color: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			name: "11:00",
			color: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			name: "11:00",
			color: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			name: "11:00",
			color: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		}
	],
};
export default function IndividualTimeContainer(props) {
	return (
		<View style={styles.container}>
			{initialData.formData.map((item, index) => {
				return (
					<IndividualTimeButton
						key={index}
						name={item.name}
						color={item.color}
						onPress={() =>
							Actions.modal({
								formData: item,
								formIndex: index,
							})
						}
					></IndividualTimeButton>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		margin: 0,
		flex: 1,
		backgroundColor: "#fff",
		flexDirection: "column",
		alignContent: "center",
		flexWrap: "wrap",
	},
});
