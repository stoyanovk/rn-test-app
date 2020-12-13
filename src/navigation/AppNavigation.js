import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import BottomNavigator from './BottomNavigator'
import Create from '../screens/Create'
import About from '../screens/About'
import { defaultStackNavigatorOptions } from './StackHeaderOptions'

import { Ionicons } from '@expo/vector-icons'
import { THEME } from '../theme'

const CreateNavigator = createStackNavigator(
  {
    Create
  },
  {
    defaultNavigationOptions: defaultStackNavigatorOptions
  }
)
const AboutNavigator = createStackNavigator(
  {
    About
  },
  {
    defaultNavigationOptions: defaultStackNavigatorOptions
  }
)

const setIcon = iconName => ({ focused }) => (
  <Ionicons name={iconName} size={24} color={focused ? THEME.WHITE_COLOR : THEME.MAIN_COLOR} />
)

const drawerNavigation = createDrawerNavigator(
  {
    Posts: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: 'Posts',
        drawerIcon: setIcon('ios-list')
      }
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: 'Create post',
        drawerIcon: setIcon('md-create')
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'About us',
        drawerIcon: setIcon('ios-information-circle')
      }
    }
  },
  {
    contentOptions: {
      inactiveTintColor: THEME.MAIN_COLOR,
      activeTintColor: THEME.WHITE_COLOR,
      activeBackgroundColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontSize: 20,
        marginLeft: -10
      }
    }
  }
)

export default createAppContainer(drawerNavigation)
