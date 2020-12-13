import { createStackNavigator } from 'react-navigation-stack'
import { defaultStackNavigatorOptions } from './StackHeaderOptions'
import Post from '../screens/PostScreen'
import Booked from '../screens/Booked'

const BookedNavigator = createStackNavigator(
  {
    Booked,
    Post
  },
  {
    defaultNavigationOptions: defaultStackNavigatorOptions
  }
)
export default BookedNavigator
