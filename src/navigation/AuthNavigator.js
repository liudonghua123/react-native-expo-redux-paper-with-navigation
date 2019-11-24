import { createAppContainer, createStackNavigator } from 'react-navigation'

import AuthScreen from '../screens/Auth'

export default createAppContainer(
 createStackNavigator({
  AuthScreen,
 })
)
