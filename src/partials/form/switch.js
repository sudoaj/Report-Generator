import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import PropTypes from "prop-types";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default class Switch extends React.Component {
  static calculateDimensions(size) {
    switch (size) {
      case "small":
        return {
          width: 50,
          padding: 10,
          circleWidth: 15,
          circleHeight: 15,
          translateX: 22,
        };
      case "large":
        return {
          width: verticalScale(55),
          padding: 0,
          circleWidth: verticalScale(28),
          circleHeight: verticalScale(28),
          translateX: verticalScale(30),
        };
      case "X-large":
        return {
          width: 65,
          circleWidth: 35,
          circleHeight: 35,
          translateX: 38,
        };
      case "X-large-border":
        return {
          width: 64,
          circleWidth: 35,
          circleHeight: 35,
          translateX: 38,
        };
      default:
        return {
          width: 60,
          padding: 12,
          circleWidth: 18,
          circleHeight: 18,
          translateX: 26,
        };
    }
  }

  static propTypes = {
    isOn: PropTypes.bool.isRequired,
    label: PropTypes.string,
    onColor: PropTypes.string.isRequired,
    offColor: PropTypes.string.isRequired,
    size: PropTypes.string,
    labelStyle: PropTypes.object,
    onToggle: PropTypes.func.isRequired,
    icon: PropTypes.object,
  };

  static defaultProps = {
    isOn: false,
    onColor: "#2ed397",
    offColor: "#ecf0f1",
    size: "medium",
    labelStyle: {},
    icon: null,
  };

  offsetX = new Animated.Value(0);
  dimensions = Switch.calculateDimensions(this.props.size);

  createToggleSwitchStyle = () => ({
    justifyContent: "center",
    width: this.dimensions.width,
    borderRadius: verticalScale(20),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(16),
    backgroundColor: this.props.isOn ? this.props.onColor : this.props.offColor,
    // borderColor: (this.props.isOn) ? this.props.onColor : this.props.offColor,
    // borderWidth: 2,
  });

  createInsideCircleStyle = () => ({
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "white",
    transform: [{ translateX: this.offsetX }],
    width: this.dimensions.circleWidth,
    height: this.dimensions.circleHeight 
    borderRadius: this.dimensions.circleWidth / 2,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1.0,
    shadowColor: "rgba(0.18,0.18,0.18,0.06)",
    // borderColor:'#fff',
    // borderWidth: 2,
  });

  render() {
    const toValue = this.props.isOn
      ? this.dimensions.width - this.dimensions.translateX
      : 3;

    Animated.timing(this.offsetX, {
      toValue,
      duration: 300,
    }).start();

    return (
      <View style={styles.container}>
        {this.props.label ? (
          <Text style={[styles.labelStyle, this.props.labelStyle]}>
            {this.props.label}
          </Text>
        ) : null}
        <TouchableOpacity
          style={this.createToggleSwitchStyle()}
          activeOpacity={0.8}
          onPress={() => {
            this.props.onToggle(!this.props.isOn);
          }}
        >
          <Animated.View style={this.createInsideCircleStyle()}>
            {this.props.icon}
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelStyle: {
    marginHorizontal: 10,
  },
});
