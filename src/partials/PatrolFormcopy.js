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

import { editSlot } from "../config/store/timeslot/actions";
import { Actions } from "react-native-router-flux";

class PatrolForms extends React.Component {
	state = {
		timeSlotName: this.props.formData.timeSlotName,
		timeSlotColorIncomplete: "yellow",
		timeSlotColorCompleted: "green",
		patrolState: this.props.formData.patrolState,
		patrolNotes: this.props.formData.patrolNotes,
		lockedDoorState: this.props.formData.lockedDoorState,
		lockedDoorNotes: this.props.formData.lockedDoorNotes,
	};

	saveAsIncomplete = () => {
		let data = {
			...this.props.formData,
			timeSlotName: this.state.timeSlotName,
			timeSlotColor: this.state.timeSlotColorIncomplete,
			patrolState: this.state.patrolState,
			patrolNotes: this.state.patrolNotes,
			lockedDoorState: this.state.lockedDoorState,
			lockedDoorNotes: this.state.lockedDoorNotes,
		};
		this.props.editSlot(this.props.formIndex, data);
		Actions.pop();
	};

	saveAsComplete = () => {
		let data = {
			...this.props.formData,
			timeSlotName: this.state.timeSlotName,
			timeSlotColor: this.state.timeSlotColorCompleted,
			patrolState: this.state.patrolState,
			patrolNotes: this.state.patrolNotes,
			lockedDoorState: this.state.lockedDoorState,
			lockedDoorNotes: this.state.lockedDoorNotes,
		};
		this.props.editSlot(this.props.formIndex, data);
		Actions.pop();
	};
	render() {
		return (
			<KeyboardAwareScrollView>
				<Text style={styles.hourName}>{this.state.timeSlotName}</Text>
				<View style={styles.container}>
					<CheckBox
						checkedColor="blue"
						uncheckedColor="red"
						title="Patrol"
						checked={this.state.patrolState}
						onPress={() =>
							this.setState({ patrolState: !this.state.patrolState })
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
							value={this.state.patrolNotes}
							onChangeText={(text) => this.setState({ patrolNotes: text })}
						/>
					</View>
					<CheckBox
						checkedColor="blue"
						uncheckedColor="red"
						title="Locked Doors"
						checked={this.state.lockedDoorState}
						onPress={() =>
							this.setState({ lockedDoorState: !this.state.lockedDoorState })
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
							value={this.state.lockedDoorNotes}
							onChangeText={(text) => this.setState({ lockedDoorNotes: text })}
						/>
					</View>
				</View>
				<View style={styles.container}>
					<TouchableHighlight
						style={styles.submit1}
						onPress={() => this.saveAsIncomplete()}
						underlayColor="#fff"
					>
						<Text style={styles.submitText}>Save As Incomplete</Text>
					</TouchableHighlight>
				</View>
				<View>
					<TouchableHighlight
						style={styles.submit2}
						onPress={() => this.saveAsComplete()}
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
		initialData: state.timeslot.initialData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		editSlot: (index, data) => dispatch(editSlot(index, data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PatrolForms);
