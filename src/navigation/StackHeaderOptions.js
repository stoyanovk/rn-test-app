import React from 'react'
import { THEME } from '../theme'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import AppHeaderIcon from '../components/AppHeaderIcon'

export const defaultStackNavigatorOptions = ({ navigation }) => ({
  headerStyle: {
    height: 100,
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.WHITE_COLOR
  },
  headerTitleStyle: {
    color: Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR
  },
  headerTintColor: Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="take photo" iconName="ios-camera" onPress={() => console.log('callback')} />
    </HeaderButtons>
  ),
  headerLeft: () => {
    return (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    )
  }
})
