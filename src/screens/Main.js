import React from 'react'
import PostList from '../components/PostList'
import data from '../data'

export default function Main({ navigation }) {
  const goToPost = post => {
    navigation.navigate('Post', { post })
  }

  return <PostList goToPost={goToPost} data={data} />
}
