
import styled from 'styled-components'
import { View, Text, Image } from 'react-native'

export const ProfileContainer = styled(View)`
  display: flex;
  align-items: center;
  top: 30px;
  width: 90%;
  height: 70%;
  margin-top: 120px;
  border-radius: 20px;
`
export const ProfilePicture = styled(Image)`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  margin-top: -100px;
`
export const ProTag = styled(Text)`
  background-color: #f6d365;
  text-align: center;
  color: black;
  width: 60px;
`
export const Name = styled(Text)`
  margin-top: 20px;
  width: 100%;
  font-size: 50px;
  color: white;
  font-weight: bold;
  text-align: center;
`
export const Email = styled(Text)`
  font-weight: bold;
  font-size: 20px;
`
export const Bio = styled(Text)`
  margin-top: 20px;
  width: 85%;
  text-align: center;
`
