import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Post from '../components/Post'

export default function PostList({ data, goToPost }) {
  return (
    <View style={s.container}>
      <FlatList
        style={s.list}
        data={data}
        renderItem={({ item }) => <Post post={item} onPress={goToPost} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontFamily: 'NotoBold',
    fontSize: 32
  },
  list: {
    width: '100%'
  }
})
