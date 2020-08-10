import React from 'react'
import styled from 'styled-components'
import {StyleSheet} from 'react-native'
import {verticalScale, moderateScale} from 'react-native-size-matters';

/**
 * Text input components
 */
const Wrap = styled.TouchableOpacity`
  height: ${verticalScale(80)}px;
  width: 100%;
  border-width: 1px;
  border-color: ${props => props.invalid ? '#ff1053' : props.valid ? '#2ed397' : 'rgba(0,0,0,0.09)'};
  border-radius: 1px;
  justify-content: center;
  background-color: #fff;
  padding-left: 25px;
  padding-right: 10px;
`
const Label = styled.Text`
  font-size: ${moderateScale(14)}px;
  font-family: GothamBold;
  margin-bottom: ${verticalScale(10)}px;
  color: #003366;
  opacity: 0.5;
`
const InputStyle = styled.Text`
  width: 80%;
  color: #003366;
  font-size: ${moderateScale(15)}px;
  font-family: GothamBold;
`

/**
 * Text input components with button
 */
const InputWrap = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`
const ForgetTouch = styled.TouchableOpacity`
  width: 20%;
`
const ForgetTxt = styled.Text`
  color: #2ed397;
  font-family: GothamBold;
  font-size: ${moderateScale(14)}px;
  text-align: right;
  width: 75%;
`
export default props => (
  <Wrap style={others.shadow} valid={props.valid} invalid={props.invalid} onPress={props.press}>
    <Label>{props.label}</Label>
    <InputWrap>
      <InputStyle numberOfLines={1} ellipsizeMode={'tail'}>
        {props.value && props.value !== '' ? props.value : props.placeholder}
      </InputStyle>
      <ForgetTouch onPress={props.touch}>
        <ForgetTxt>{props.btnTitle}</ForgetTxt>
      </ForgetTouch>
    </InputWrap>
  </Wrap>
)

const others = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1.0,
    shadowColor: 'rgba(0.18,0.18,0.18,0.06)'
  }
})