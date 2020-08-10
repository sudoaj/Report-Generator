import React from 'react'
import {Icon} from 'native-base'
import {Platform} from 'react-native'
import styled from 'styled-components'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Wrap = styled.View`
  width: ${verticalScale(45)}px;
  height: ${verticalScale(45)}px;
  border-radius: ${verticalScale(45) / 2}px;
  background-color: #f7f8fa;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Logo = styled(Icon)`
  color: #003366;
  font-size: ${moderateScale(22)}px;
`
const Txt = styled.Text`
  font-family: GothamMedium;
  color: #003366;
  font-size: ${moderateScale(16)}px;
  margin-top: ${Platform.OS === 'android' ? '0px' : '3px'};
`

export default props => (
  <Wrap>
    {props.company ? (
      <Logo
        type={'FontAwesome'}
        name={'building-o'}
      />
    ) : <Txt>{props.name && getInitials(props.name.trim())}</Txt>}
  </Wrap>
)


const getInitials = function (string) {
  let names = string.split(' '), initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) initials += names[names.length - 1].substring(0, 1).toUpperCase();
  return initials;
};