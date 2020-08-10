import React, {Component} from 'react'
import styled from 'styled-components'
import {StyleSheet} from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const Wrap = styled.View``
const DateBox = styled.TouchableOpacity`
  height: ${verticalScale(80)}px;
  width: 100%;
  border-width: 1px;
  border-color: rgba(0,0,0,0.09);
  border-radius: 1px;
  justify-content: center;
  background-color: #fff;
  padding-left: 25px;
  padding-right: 25px;
`
const Label = styled.Text`
  font-size: ${moderateScale(14)}px;
  font-family: GothamBold;
  margin-bottom: ${verticalScale(10)}px;
  color: #003366;
  opacity: 0.5;
`
const DateValue = styled.Text`
  width: 100%;
  color: #003366;
  font-size: ${moderateScale(15)}px;
  font-family: GothamBold;
`

export default class DatePicker extends Component {

  state = {
    visible: false,
    date: this.props.value ? this.props.value.toDateString() : ''
  }

  toggleDatePicker = () => this.setState({visible: !this.state.visible})

  handleDatePicked = date => {
    this.setState({
      date: date.toDateString(),
      visible: false
    }, () => {
      this.props.setSelectedDate(date.toString())
    })
  }

  render() {
    const {visible, date} = this.state
    const {appearance} = this.props
    return(
      <Wrap background={{dynamic:{light: 'red', dark:'pink'}}}>
        <DateBox
          style={others.shadow}
          onPress={this.toggleDatePicker}>
          <Label>{this.props.label}</Label>
          <DateValue>{date ? date : this.props.placeholder}</DateValue>
        </DateBox>
        <DateTimePicker
          isVisible={visible}
          onConfirm={this.handleDatePicked}
          onCancel={this.toggleDatePicker}
          datePickerContainerStyleIOS={{backgroundColor: appearance === 'dark' ? 'black' : 'white'}}
        />
      </Wrap>
    )
  }
}

const others = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1.0,
    shadowColor: 'rgba(0.18,0.18,0.18,0.06)'
  }
})