import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import FeedScreen from '../screens/Feed'
import SettingsScreen from '../screens/Settings'

const HomeStack = createStackNavigator(
 {
  FeedScreen,
 },
 {
  navigationOptions: {
   tabBarLabel: 'Feed',
   tabBarIcon: ({ focused }) => (
    <TabBarIcon
     focused={focused}
     name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
   ),
  },
 }
)

const SettingsStack = createStackNavigator(
 {
  SettingsScreen,
 },
 {
  navigationOptions: {
   tabBarLabel: 'Settings',
   tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
   ),
  },
 }
)

const tabNavigator = createBottomTabNavigator({
 HomeStack,
 SettingsStack,
})

export default tabNavigator
