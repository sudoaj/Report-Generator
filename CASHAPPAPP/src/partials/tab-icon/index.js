import React from "react";
import { Icon } from "native-base";
import styled from "styled-components";
// color: #0f52ba;
const TabIcon = styled(Icon)`
color: #0f52ba;
  font-size: 23px;
  opacity: ${(props) => (props.focused ? 1 : 0.6)};
`;
export default ({ name, type, focused }) => (
  <TabIcon name={name} type={type} focused={focused} />
);
