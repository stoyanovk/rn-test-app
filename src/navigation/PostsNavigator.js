import { createStackNavigator } from 'react-navigation-stack'

import Main from '../screens/Main'
import Post from '../screens/PostScreen'
import { defaultStackNavigatorOptions } from './StackHeaderOptions'

const PostNavigator = createStackNavigator(
  {
    Main,
    Post
  },
  {
    defaultNavigationOptions: defaultStackNavigatorOptions
  }
)
export default PostNavigator
