import { Image, Text, View } from 'react-native'
import styled from 'styled-components'
import { LinearGradient } from 'expo-linear-gradient'

export const RecentActivity = styled(LinearGradient)`
  background-color: pink;
  
  
  border-radius: 15px;
  height: 50px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  
 
`
//TODO: fix the width styles to match active discussion
export const TextContainer = styled(Text)`
  
  width: 75%; 
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  padding: 10px 0 0 10px;
  margin-bottom: 5px;

`

export const Icon = styled(Image)`
  margin-left: 10px;
  margin-right: 20px;
  
 
`

export const Name = styled(Text)`
  color: white;
`
