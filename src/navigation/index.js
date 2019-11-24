import React from 'react'
import { useSelector } from 'react-redux'
import { isLoggedInSelector } from '../store/reducers/Auth'

import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'

export default function App(props) {
 const isLoggedIn = useSelector(isLoggedInSelector)

 return isLoggedIn ? <AppNavigator /> : <AuthNavigator />
}
