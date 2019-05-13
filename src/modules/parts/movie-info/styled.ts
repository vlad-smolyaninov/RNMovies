import styled from 'styled-components'
import { Text, View } from 'react-native'

export const Title = styled(Text)`
  text-transform: capitalize;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`

export const Overview = styled(Text)`
  padding: 0 20px;
  font-size: 14px;
  margin-bottom: 10px;
`

export const MovieBlock = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: grey;
`
