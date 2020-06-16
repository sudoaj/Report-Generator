import React from 'react'
import {Icon} from 'native-base'
import styled from 'styled-components'

const TabIcon = styled(Icon)`
  color: #2ed397;
  font-size: 23px;
  opacity: ${props => props.focused ? 1 : 0.5};
`
export default ({name, type, focused}) => (
  <TabIcon
    name={name}
    type={type}
    focused={focused}
  />
)