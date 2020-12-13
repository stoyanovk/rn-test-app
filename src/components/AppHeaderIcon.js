import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { THEME } from '../theme'

const iconColor = Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR

export default function AppHeaderIcon(props) {
  return <HeaderButton iconSize={24} color={iconColor} IconComponent={Ionicons} {...props} />
}
