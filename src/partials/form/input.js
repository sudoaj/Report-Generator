import React from 'react'
import styled from 'styled-components'
import {StyleSheet} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

/**
 * Text input components
 */
const Wrap = styled.View`
  height: ${verticalScale(80)}px;
  width: 100%;
  border-width: 1px;
  border-color: ${props => props.invalid ? '#ff1053' : props.valid ? '#2ed397' : 'rgba(0,0,0,0.09)'};
  border-radius: 1px;
  justify-content: center;
  background-color: #fff;
  padding-left: 25px;
  padding-right: 25px;
`
const AreaWrap = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: ${props => props.invalid ? '#ff1053' : props.valid ? '#2ed397' : 'rgba(0,0,0,0.09)'};
  border-radius: 1px;
  justify-content: center;
  background-color: #fff;
  padding: ${verticalScale(15)}px 25px;
`
const Label = styled.Text`
  font-size: ${moderateScale(14)}px;
  font-family: GothamBold;
  margin-bottom: ${verticalScale(10)}px;
  color: #003366;
  opacity: 0.5;
`
const InputStyle = styled.TextInput`
  width: 100%;
  color: #003366;
  font-size: ${moderateScale(15)}px;
  font-family: GothamBold;
`
const LargeInput = styled(InputStyle)`
  min-height: 100px;
`
const AreaLabel = styled(Label)`
  margin-bottom: ${verticalScale(8)}px;
`

export const Input = props => (
  <Wrap style={others.shadow} valid={props.valid} invalid={props.invalid}>
    <Label>{props.label}</Label>
    <InputStyle
      value={props.value}
      keyboardType={props.type}
      secureTextEntry={props.secure}
      placeholder={props.placeholder}
      placeholderTextColor={'#003366'}
      autoCapitalize={props.capitalize}
      underlineColorAndroid={'transparent'}
      onChangeText={props.change(props.name)}
      maxLength={props.length && props.length}
    />
  </Wrap>
)

export const TextArea = props => (
  <AreaWrap style={others.shadow} valid={props.valid} invalid={props.invalid}>
    <AreaLabel>{props.label}</AreaLabel>
    <LargeInput
      multiline={true}
      value={props.value}
      keyboardType={props.type}
      secureTextEntry={props.secure}
      placeholder={props.placeholder}
      placeholderTextColor={'#003366'}
      autoCapitalize={props.capitalize}
      style={{textAlignVertical: 'top'}}
      underlineColorAndroid={'transparent'}
      maxLength={props.length && props.length}
      onChangeText={props.plane ? (text) => props.change(text) : props.change(props.name)}
    />
  </AreaWrap>
)

/**
 * Text input components with button
 */
const InputWrap = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`
const BtnInput = styled.TextInput`
  width: 75%;
  color: #003366;
  font-size: ${moderateScale(15)};
  font-family: GothamBold;
`
const ForgetTouch = styled.TouchableOpacity`
  width: 25%;
`
const ForgetTxt = styled.Text`
  color: #2ed397;
  font-family: GothamBold;
  font-size: ${moderateScale(14)};
  text-align: right;
`
export const ButtonInput = props => (
  <Wrap style={others.shadow} valid={props.valid} invalid={props.invalid}>
    <Label>{props.label}</Label>
    <InputWrap>
      <BtnInput
        value={props.value}
        keyboardType={props.type}
        secureTextEntry={props.secure}
        placeholder={props.placeholder}
        placeholderTextColor={'#003366'}
        autoCapitalize={props.capitalize}
        underlineColorAndroid={'transparent'}
        onChangeText={props.change(props.name)}
        maxLength={props.length && props.length}
      />
      <ForgetTouch onPress={props.touch}>
        <ForgetTxt>{props.btnTitle}</ForgetTxt>
      </ForgetTouch>
    </InputWrap>
  </Wrap>
)


/**
 * Error Component
 */
const ErrorTxtStyle = styled.Text`
  font-size: ${moderateScale(11)};
  color: #ff1053;
  font-family: GothamBook;
  margin-top: ${verticalScale(5)};
  margin-left: ${scale(5)};
`
export const ErrorTxt = props => (
  <ErrorTxtStyle>{props.error}</ErrorTxtStyle>
)

const others = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1.0,
    shadowColor: 'rgba(0.18,0.18,0.18,0.06)'
  }
})