import Constants from 'expo-constants'
import Header from '../header'
import React, {Component} from 'react'
import styled from 'styled-components'
import DefaultImg from './default-img'
import {Dimensions, StyleSheet} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const headerHeight = Constants.statusBarHeight + 50 + 52
const height = Dimensions.get('window').height - headerHeight

const Wrap = styled.View``
const DateBox = styled.TouchableOpacity`
  height: ${verticalScale(80)};
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
  font-size: ${moderateScale(14)};
  font-family: GothamBold;
  margin-bottom: ${verticalScale(12)};
  color: #003366;
  opacity: 0.5;
`
const DateValue = styled.Text`
  width: 100%;
  color: #003366;
  font-size: ${moderateScale(15)};
  font-family: GothamBold;
`
const Modal = styled.Modal``
const Inner = styled.View`
  flex: 1;
  background-color: #f7f8fa;
`
const SearchBar = styled.View`
  height: ${verticalScale(52)};
  width: 100%;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0,0,0,0.09);
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`
const Input = styled.TextInput`
  height: 80%;
  width: 100%;
  color: #003366;
  font-size: ${moderateScale(14)};
  font-family: GothamMedium;
`
const DataWrap = styled.View`
  background-color: #fff;
  padding-left: 15px;
`
const EachData = styled.TouchableOpacity`
  height: ${verticalScale(70)};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const LeftData = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100%;
`
const ImageWrap = styled.View`
  margin-right: 15px;
`
const Img = styled.Image`
  width: ${verticalScale(40)};
  height: ${verticalScale(40)};
  border-radius: ${verticalScale(40) / 2};
  background-color: #f7f8fa;
  resize-mode: contain;
`
const Detail = styled.View`
  height: 100%;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0,0,0,0.09);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DetailInner = styled.View``
const Name = styled.Text`
  font-size: ${moderateScale(14)};
  font-family: GothamBold;
  color: #003366;
  margin-bottom: ${verticalScale(5)};
`
const SubTitle = styled.Text`
  font-size: ${moderateScale(12)};
  font-family: GothamBold;
  color: #003366;
  opacity: 0.5;
`
const List = styled.FlatList``

const PickerItem = props => (
  <EachData onPress={props.press}>
    <LeftData>
      <ImageWrap>
        {props.image ? (
          <Img source={{uri: props.image}}/>
        ) : <DefaultImg name={'Company Name'} company/>}
      </ImageWrap>
      <Detail>
        <DetailInner>
          <Name>{props.item.name}</Name>
          <SubTitle>{props.item.subtitle}</SubTitle>
        </DetailInner>
      </Detail>
    </LeftData>
  </EachData>
)

const MemberItem = props => (
  <EachData onPress={props.press}>
    <LeftData>
      <ImageWrap>
        {props.image ? (
          <Img source={{uri: props.image}}/>
        ) : <DefaultImg name={props.name}/>}
      </ImageWrap>
      <Detail>
        <DetailInner>
          <Name>{props.name}</Name>
          <SubTitle>{props.subtitle}</SubTitle>
        </DetailInner>
      </Detail>
    </LeftData>
  </EachData>
)

export default class SinglePicker extends Component {

  state = {
    selected: null,
    visible: false,
    searchTxt: '',
    filter: []
  }

  keyExtractor = (item, index) => index.toString()
  cancel = () => this.setState({selected: null, visible: false})
  toggleModal = () => this.setState({visible: !this.state.visible})

  done = (selected) => {
    this.setState({visible: false, selected}, () => {
      this.props.select(selected)
    })
  }

  handleChange = (searchTxt) => {
    let filter = this.props.data && this.props.data.filter(item => {
      return item.name.toLowerCase().indexOf(searchTxt.toLowerCase()) !== -1
    })
    !this.props.member && filter && filter.slice(0, 4)
    this.setState({searchTxt, filter})
  }

  renderItem = ({item}) => (
    <PickerItem
      item={item}
      img={item.image && item.image}
      press={() => this.done(item)}
    />
  )

  renderMember = ({item}) => (
    <MemberItem
      name={item.fullName}
      image={item.avatar && item.avatar}
      subtitle={item.username}
      press={() => this.done(item)}
    />
  )

  render() {
    const {label, title, placeholder, search, initial} = this.props
    const {selected, visible, searchTxt} = this.state

    return(
      <Wrap>
        <DateBox style={others.shadow} onPress={this.toggleModal}>
          <Label>{label}</Label>
          <DateValue>{selected ? selected.name : initial}</DateValue>
        </DateBox>
        <Modal
          transparent={false}
          animationType={'slide'}
          visible={visible}
          onRequestClose={() => console.log()}>
          <Inner>
            <Header
              title={title}
              cancel={'Cancel'}
              pressCancel={this.cancel}
            />
            {search && (
              <SearchBar>
                <Input
                  autoFocus={true}
                  value={searchTxt}
                  placeholder={placeholder}
                  underlineColorAndroid={'transparent'}
                  onChangeText={(searchTxt) => this.handleChange(searchTxt)}
                />
              </SearchBar>
            )}
            <DataWrap>
              <List
                data={this.state.filter}
                keyExtractor={this.keyExtractor}
                keyboardShouldPersistTaps={'always'}
                renderItem={this.props.member ? this.renderMember : this.renderItem}
              />
            </DataWrap>
          </Inner>
        </Modal>
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