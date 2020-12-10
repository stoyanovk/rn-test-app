import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import Main from '../screens/Main'
import Post from '../screens/PostScreen'
import Create from '../screens/Create'
import Booked from '../screens/Booked'
import About from '../screens/About'

import { THEME } from '../theme'

const AppNavigation = createStackNavigator(
  {
    Main,
    Post: {
      screen: Post
    }
    // Create: {
    //   screen: Create
    // },
    // Booked: {
    //   screen: Booked
    // },
    // About: {
    //   screen: About
    // }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        height: 100,
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.WHITE_COLOR,
      },
      headerTitleStyle:{
        color: Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR
      }
    }
  }
)

export default createAppContainer(AppNavigation)
