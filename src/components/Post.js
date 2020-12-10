import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'

export default function Post({ post, onPress }) {
  return (
    <TouchableOpacity activeOpacity="0.7" onPress={() => onPress(post)}>
      <ImageBackground style={s.background} source={{ uri: post.url }}>
        <View style={s.textWrap}>
          <Text style={s.text}>{post.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}


const s = StyleSheet.create({
  background: {
    width: '100%',
    height: 300,
    marginBottom: 10
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 5
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Noto',
    textAlign: 'center'
  }
})
