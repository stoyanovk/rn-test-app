import React from 'react'
import PostList from '../components/PostList'
import data from '../data'

const filteredData = data.filter(({ booked }) => booked)

export default function Booked({ navigation }) {
  const goToPost = post => {
    navigation.navigate('Post', { post })
  }
  return <PostList goToPost={goToPost} data={filteredData} />
}

Booked.navigationOptions = {
  headerTitle: 'Favorite'
}
