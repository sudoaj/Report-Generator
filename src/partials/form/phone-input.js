import React from 'react'
import styled from 'styled-components'
import {StyleSheet} from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import {moderateScale, verticalScale} from 'react-native-size-matters'
import axios from "axios";


const Wrap = styled.View``
const Box = styled.View`
  height: ${verticalScale(80)};
  width: 100%;
  border-width: 1px;
  border-color: ${props => props.invalid ? '#ff1053' : props.valid ? '#2ed397' : 'rgba(0,0,0,0.09)'};
  border-radius: 1px;
  justify-content: center;
  background-color: #fff;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
`
const Label = styled.Text`
  font-size: ${moderateScale(14)};
  font-family: GothamBold;
  margin-bottom: ${verticalScale(7)};
  color: #003366;
  opacity: 0.5;
`
const InputWrap = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`
const ForgetTouch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
const ForgetTxt = styled.Text`
  color: #003366;
  font-family: GothamBold;
  font-size: ${moderateScale(15)};
  margin-top: 2px;
`
const Input = styled.TextInput`
  width: 70%;
  margin-left: ${verticalScale(7)};
  color: #003366;
  font-family: GothamBold;
  font-size: ${moderateScale(15)};
`


export default class PhoneInput extends React.Component {

  state = {
    cca2: 'US',
    number: '',
    callingCode: '91',
    modalVisible: false,
  }

  async componentDidMount() {
    await axios.get('http://ip-api.com/json').then(res => {
      this.setState({cca2: res.data.countryCode})
    }).catch(error => console.log(error))
  }

  change = number => {
    this.setState({number})
    this.props.change(this.state.callingCode+number)
  }

  render() {
    return (
      <Wrap>
        <Box style={others.shadow}>
          <Label>{this.props.label}</Label>
          <InputWrap>
            <ForgetTouch>
              <CountryPicker
                withFlag={true}
                withFilter={true}
                translation={'eng'}
                withFlagButton={true}
                withAlphaFilter={true}
                cca2={this.state.cca2}
                countryCode={this.state.cca2}
                onSelect={value => this.setState({ cca2: value.cca2, callingCode: value.callingCode[0]})}
              />
              <ForgetTxt>+{this.state.callingCode}</ForgetTxt>
            </ForgetTouch>
            <Input
              onBlur={this.props.blur}
              value={this.props.value}
              onChangeText={this.change}
              keyboardType={'number-pad'}
              placeholderTextColor={'#003366'}
              secureTextEntry={this.props.secure}
              placeholder={this.props.placeholder}
              underlineColorAndroid={'transparent'}
              autoCapitalize={this.props.capitalize}
              maxLength={this.props.length && this.props.length}
            />
          </InputWrap>
        </Box>
      </Wrap>
    );
  }
}

const others = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1.0,
    shadowColor: 'rgba(0.18,0.18,0.18,0.06)'
  }
})