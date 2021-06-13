import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { withTheme } from 'styled-components'
import * as Styles from './styles'
import RecentActivity from '../RecentActivity'
import ActiveDiscussion from '../ActiveDiscussion'
import { Alert} from 'react-native'


const Posts = [
    {
      id: 1,
      title: 'Post 1',
      time: '30 mins ago',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      author: 'Alexis lazcano',
    },
    {
      id: 2,
      title: 'Post 2',
      time: '30 mins ago',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      author: 'Alex lazcano',
    },
    {
      id: 3,
      title: 'Post 3',
      time: '30 mins ago',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      author: 'Alexis lazcano',
    },
    {
      id: 4,
      title: 'Post 4',
      time: '30 mins ago',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      author: 'Alex lazcano',
    },
    {
      id: 5,
      title: 'Post 5',
      time: '30 mins ago',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      author: 'Alexis lazcano',
    },
    {
      id: 6,
      title: 'Post 6',
      time: '30 mins ago',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      author: 'Alex lazcano',
    },
    {
      id: 7,
      title: 'Post 7',
      time: '30 mins ago',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      author: 'Alexis lazcano',
    },
    {
      id: 8,
      title: 'Post 8',
      time: '30 mins ago',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      author: 'Alex lazcano',
    },
  ]

  const renderPosts = ({ item }) => (
    <ActiveDiscussion
      title={item.title}
      time={item.time}
      comment={item.text}
      author={item.author}
      pressFunction={() => handlePress(item.id)}
    ></ActiveDiscussion>
  )
  
const handlePress = num => {
    Alert.alert(`Pressed Id ${num}`, 'My Alert Msg', [{ text: 'OK' }])
  }
  


const CommunityRoute = props => {
  return (
    <LinearGradient
      colors={[props.theme.Back1, props.theme.Back2]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={Styles.styles.PostView}>
        <Styles.TempPageText>CommunityRoute</Styles.TempPageText>
        <RecentActivity user='Alex' reaction='Respect'></RecentActivity>

        <FlatList
          style={Styles.styles.FlatListStyle}
          bounces={true}
          data={Posts}
          renderItem={renderPosts}
          keyExtractor={item => item.id}
        ></FlatList>
      </SafeAreaView>
    </LinearGradient>
  )
}
export default withTheme(CommunityRoute) 