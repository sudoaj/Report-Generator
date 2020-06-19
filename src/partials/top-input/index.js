import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { connect } from "react-redux";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";
import {
  setOfficerName,
  setReportDate,
  setSiteLocation,
  setReportTime,
  setTotalWorkTime,
} from "../../config/store/officer/actions";

class TopInputs extends React.Component {
  componentDidMount = () => {
    this.props.setOfficerName("Officers Name");
    this.props.setReportDate("MM/DD/YYYY");
    this.props.setSiteLocation("Site Location");
    this.props.setReportTime("0000 - 0000");
    this.props.setTotalWorkTime(9);
  };
  render() {
    return (
      <View style={styles.container}>
        <Fumi
          inputStyle={{ color: "#91627b" }}
          style={styles.NameText}
          label={this.props.officerName}
          iconClass={FontAwesomeIcon}
          iconName={"user-circle-o"}
          iconColor={"#000"}
          iconSize={15}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(text) => this.props.setOfficerName(text)}
        />
        <Fumi
          label={this.props.reportDate}
          iconClass={FontAwesomeIcon}
          iconName={"calendar"}
          iconColor={"#000"}
          iconSize={15}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(text) => this.props.setReportDate(text)}
        />
        <Fumi
          label={this.props.reportSiteLocation}
          iconClass={FontAwesomeIcon}
          iconName={"location-arrow"}
          iconColor={"#000"}
          iconSize={15}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(text) => this.props.setSiteLocation(text)}
        />
        <Fumi
          label={this.props.reportTime}
          iconClass={FontAwesomeIcon}
          iconName={"clock-o"}
          iconColor={"#000"}
          iconSize={15}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(text) => this.props.setReportTime(text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignContent: "center",
    flexWrap: "nowrap",
    marginBottom: 20,
  },
  NameText: {
    margin: 0,
    fontSize: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    officerName: state.officer.officerName,
    reportDate: state.officer.reportDate,
    reportSiteLocation: state.officer.reportSiteLocation,
    reportTime: state.officer.reportTime,
    totalWorkTime: state.officer.totalWorkTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOfficerName: (officerName) => dispatch(setOfficerName(officerName)),
    setReportDate: (reportDate) => dispatch(setReportDate(reportDate)),
    setSiteLocation: (reportSiteLocation) =>
      dispatch(setSiteLocation(reportSiteLocation)),
    setReportTime: (reportTime) => dispatch(setReportTime(reportTime)),
    setTotalWorkTime: (totalWorkTime) =>
      dispatch(setTotalWorkTime(totalWorkTime)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopInputs);
