import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Booked() {
  return (
    <View style={s.container}>
      <Text style={s.text}>Booked</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'NotoBold',
    fontSize: 32
  }
})
