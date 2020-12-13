import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import PostNavigator from './PostsNavigator'
import BookedNavigator from './BookedNavigator'

import { THEME } from '../theme'

const bottomTabsOptions = {
  Posts: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: info => {
        return <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      }
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarIcon: info => {
        return <Ionicons name="ios-star" size={25} color={info.tintColor} />
      }
    }
  }
}

const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(bottomTabsOptions, {
        shifting: true,
        barStyle: {
          backgroundColor: THEME.MAIN_COLOR
        }
      })
    : createBottomTabNavigator(bottomTabsOptions, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR
        }
      })

export default BottomNavigator
