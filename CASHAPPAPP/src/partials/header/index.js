import React from "react";
import { Icon } from "native-base";
import styled from "styled-components";
// import Constants from "expo-constants";
import { Platform, ActivityIndicator } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

/**
 *  Abdul Mumin Olayinka
 *
 * Header Component
 */
// font-family: GothamBold;
// const statusBar = Constants.statusBarHeight
const statusBar = 44;

const Wrap = styled.View`
  background-color: #0f52ba;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #0f52ba;
`;
const StatusWrap = styled.View`
  height: ${statusBar};
  width: 100%;
`;
const Dummy = styled.View`
  width: 25%;
`;
const Head = styled.View`
  height: ${statusBar > 40 ? verticalScale(35) : verticalScale(40)};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${statusBar > 40 ? verticalScale(3) : verticalScale(12)};
`;
const LeftWrap = styled.View`
  width: ${(props) => (props.cancel ? "25%" : "25%")};
`;
const LeftBtn = styled.TouchableOpacity`
  padding-left: 15px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const LeftBtnTxt = styled.Text`
  color: #2ed397;
  font-size: ${moderateScale(14)};
`;
const Back = styled.TouchableOpacity`
  height: 100%;
  padding-left: 16px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const BackIcon = styled(Icon)`
  color: #2ed397;
  font-size: ${moderateScale(18)};
`;
const Title = styled.Text`
  color: white;
  font-size: ${moderateScale(14)};
  text-align: center;
`;
const Loading = styled.View`
  padding-right: 15px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const EmptyWrap = styled.View`
  width: 25%;
`;
const RightWrap = styled.View`
  width: 100%;
`;
const RightBtn = styled.TouchableOpacity`
  padding-right: 15px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`;
const RightTxt = styled.Text`
  color: #2ed397;
  font-size: ${moderateScale(14)};
`;

export default (props) => (
  <Wrap>
    {Platform.OS === "android" && props.modal ? null : <StatusWrap />}
    <Head>
      {props.left || props.cancel ? (
        <LeftWrap cancel={props.cancel}>
          {props.cancel ? (
            <LeftBtn>
              <LeftBtnTxt onPress={props.pressCancel}>
                {props.cancel}
              </LeftBtnTxt>
            </LeftBtn>
          ) : (
            <Back onPress={props.left}>
              <BackIcon type={"FontAwesome"} name={"long-arrow-left"} />
            </Back>
          )}
        </LeftWrap>
      ) : (
        <Dummy />
      )}
      <Title>{props.title && props.title}</Title>
      <EmptyWrap>
        {props.loading ? (
          <Loading>
            <ActivityIndicator size={"small"} color={"#262626"} />
          </Loading>
        ) : (
          <RightWrap>
            {props.right && (
              <RightBtn onPress={props.right}>
                <RightTxt>{props.next}</RightTxt>
              </RightBtn>
            )}
          </RightWrap>
        )}
      </EmptyWrap>
    </Head>
  </Wrap>
);
