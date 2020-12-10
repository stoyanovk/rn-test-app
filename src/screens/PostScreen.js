import React from 'react'
import { ScrollView, Text, StyleSheet, Image, Button } from 'react-native'
import { createToButtonAlert } from '../alerts'
import data from '../data'

export default function Post({ navigation }) {
  const post = data.find(post => navigation.getParam('id') === post.id)

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
      <Button title="Delete post" onPress={removeHandler} />
    </ScrollView>
  )
}

Post.navigationOptions = ({ navigation }) => {
  const post = data.find(post => navigation.getParam('id') === post.id)
  return {
    headerTitle: `Post date: ${post.date}`
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
