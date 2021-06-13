import React from 'react'
import {  TouchableOpacity } from "react-native";
import { Background, ProfilePicture, TextContainer, PostComment, PostHeader, Author, PostTitle, Time } from './styles'
import { colors } from '../GlobalStyles'
const ActiveDiscussion = ({title, time, author, comment, pressFunction}) => {
  return (
    <TouchableOpacity onPress={() => pressFunction()}>
      <Background colors={[colors.color1, colors.color2]}>
          <ProfilePicture source={require("../../../assets/alex.jpg")}/>
            <TextContainer>
              <PostHeader>
                <PostTitle>{title}</PostTitle>
                <Author>{author} </Author>
              </PostHeader>
              <PostComment>
                {comment}
              </PostComment>
              <Time>{time}</Time>
            </TextContainer>
          
      </Background>
    </TouchableOpacity>
  )
}

export default ActiveDiscussion
