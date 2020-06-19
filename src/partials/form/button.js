import React from 'react'
import styled from 'styled-components'
import {StyleSheet, ActivityIndicator} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Wrap = styled.TouchableOpacity`
  width: 100%;
  height: ${verticalScale(60)}px;
  background-color: ${props => props.background ? props.background : '#2ed397'};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? '0.4' : '1'};
`
const Txt = styled.Text`
  font-family: GothamBold;
  font-size: ${moderateScale(14)}px;
  color: #fff;
  letter-spacing: 1px;
`

export default props => (
  <Wrap
    background={props.background}
    style={props.shadow && others.shadow}
    onPress={props.loading ? null : props.press}
    disabled={props.disabled}>
    {props.loading
      ? <ActivityIndicator size="small" color="#fff" />
      : <Txt>{props.title}</Txt>}
  </Wrap>
)

const others = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1.0,
    shadowColor: 'rgba(0,0,0,0.08)'
  }
})