import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";
import IndividualTimeButton from "../time-button"
import { Actions } from "react-native-router-flux";
import  { setTimeSlotName } from "../../config/store/timeslot/actions"
import { connect } from "react-redux";

class IndividualTimeContainer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount = () => {
    this.props.setTimeSlotName("1900");
  };
  render() {
    return (
      <View style={styles.container}>
        {/* MAPPING STATUS BOX BUTTON */}
        {statusNameAndColor.map(({ name, color }) => {
          return (
            <View
              key={name}
              style={[
                { backgroundColor: color },
                { margin: 3 },
                { marginBottom: 10 },
                { padding: 15 },
              ]}
            >
              <Text style={({ margin: 1 }, { padding: 1 }, { color: "white" })}>
                {name}
              </Text>
            </View>
          );
        })}

        {/* MAPPING TIME BUTTON */}
        {this.props.initialData.formData.map((item, index) => (
          <IndividualTimeButton
            key={index}
            name={item.timeSlotName}
            color={item.timeSlotColor}
            onPress={() => Actions.modal({ formData: item, formIndex: index })}
          ></IndividualTimeButton>
        ))}

        <TouchableHighlight
          style={styles.submit}
          onPress={() => generatReport()}
          underlayColor="#fff"
        >
          <Text style={styles.submitText}>Generate report</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const generatReport = () => {
  console.log("Hi there");

  Alert.alert(
    "Are you sure?",
    "Check to see if all entry is complete",
    [
      {
        text: "Go back",
        onPress: () => console.log("Cancel Pressed"),
        style: "default",
      },
      {
        text: "Generate report",
        onPress: () => Actions.completedReport(),
        style: "destructive",
      },
    ],
    { cancelable: false }
  );
};
const statusNameAndColor = [
  {
    name: "CURRENT",
    color: "blue",
  },
  {
    name: "DONE",
    color: "green",
  },
  {
    name: "INCOMPLETE",
    color: "grey",
  },
  {
    name: "MISSED",
    color: "red",
  },
];

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: "center",
    flex: 0.5,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
  },
  submit: {
    backgroundColor: "#000",
    marginRight: 70,
    marginLeft: 70,
    marginTop: 70,
    marginBottom: 5,
    padding: 20,
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
    timeSlotName: state.timeslot.timeSlotName,
    initialData: state.timeslot.initialData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTimeSlotName: (timeSlotName) => dispatch(setTimeSlotName(timeSlotName)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualTimeContainer);
