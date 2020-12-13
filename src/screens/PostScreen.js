import React from 'react'
import { ScrollView, Text, StyleSheet, Image, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { createToButtonAlert } from '../alerts'
import AppHeaderIcon from '../components/AppHeaderIcon'

export default function Post({ navigation }) {
  const post = navigation.getParam('post')
  const removePost = () => {}

  const removeHandler = () => {
    createToButtonAlert({
      title: 'Delete Post',
      text: 'Are you sure?',
      success: removePost
    })
  }

  return (
    <ScrollView style={s.container}>
      <Text style={s.title}>{post.title}</Text>
      <Image
        style={s.image}
        source={{
          uri: post.url
        }}
      />
      <Text style={s.text}>{post.description}</Text>
      <Button title="Delete post" onPress={removeHandler} color="red" />
    </ScrollView>
  )
}

Post.navigationOptions = ({ navigation }) => {
  const post = navigation.getParam('post')
  const icon = post.booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: `Post date: ${post.date}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="booked" iconName={icon} onPress={() => console.log('callback')} />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="ios-arrow-back" iconName="ios-arrow-back" onPress={() => navigation.goBack()} />
      </HeaderButtons>
    )
  }
}

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  title: {
    fontFamily: 'NotoBold',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10
  },
  image: {
    height: 300
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Noto'
  }
})
