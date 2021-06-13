import { LinearGradient } from 'expo-linear-gradient'
import { Image, View, Text } from 'react-native'
import styled from 'styled-components'

export const Background = styled(LinearGradient)`
  margin-bottom: 20px;
  width: 85%;
  display: flex;
  flex-direction: row;
  height: 150px;
  padding-top: 15px;

  padding-left: 15px;
  border-radius: 15px;
  align-self: center;
`

export const ProfilePicture = styled(Image)`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`

export const TextContainer = styled(View)`
  flex: 3;
  padding: 5px;
  margin-left: 5px;
  justify-content: space-between;
`
export const PostHeader = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
`
export const PostTitle = styled(Text)`
  font-weight: bold;
  font-size: 17px;
`
export const Author = styled(Text)`
  color:white;
  padding-left: 10px;
`
export const PostComment = styled(Text)`
  
`
export const Time = styled(Text)`
  color: white;

`