import React from "react";
import { Text } from "react-native";
import { Icon } from "native-base";
import styled from "styled-components";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const Wrap = styled.Modal``;
const Inner = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const MarkWrap = styled.View`
  height: ${verticalScale(200)}px;
  width: ${verticalScale(200)}px;
  border-radius: ${verticalScale(200) / 2}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #2ed397;
`;
const Check = styled(Icon)`
  color: #fff;
  font-size: ${moderateScale(80)}px;
`;
const ThanksTxt = styled.Text`
  color: #003366;
  font-size: ${moderateScale(20)}px;
  font-family: GothamBold;
  margin-top: ${verticalScale(40)}px;
  margin-bottom: ${verticalScale(40)}px;
`;
const EmployeeTxt = styled.Text`
  color: #003366;
  font-size: ${moderateScale(20)}px;
  font-family: GothamBold;
  margin-top: ${verticalScale(40)}px;
`;
const Btn = styled.TouchableOpacity`
  width: ${scale(180)}px;
  height: ${verticalScale(50)}px;
  background-color: #2ed397;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Txt = styled.Text`
  font-family: GothamBold;
  font-size: ${moderateScale(20)}px;
  letter-spacing: 1px;
  color: #fff;
`;

export default class ClockedIn extends React.Component {
  render() {
    return (
      <Wrap
        transparent={false}
        animationType={"fade"}
        visible={this.props.visible}
        // onRequestClose={() => console.log()}
      >
        <Inner>
          <MarkWrap>
            <Check type={"FontAwesome"} name={"thumbs-up"} />
          </MarkWrap>

          <EmployeeTxt>{this.props.userEmployeeNumber}</EmployeeTxt>
          <ThanksTxt>You have now clocked in</ThanksTxt>
          <Btn onPress={this.props.close}>
            <Txt>DONE</Txt>
          </Btn>
        </Inner>
      </Wrap>
    );
  }
}
