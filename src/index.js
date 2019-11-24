import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { Provider as StoreProvider } from 'react-redux'

import { Provider as PaperProvider } from 'react-native-paper'

import theme from '../constants/Theme'
import store from './store'

import Navigation from './navigation'

export default function App(props) {
 return (
  <StoreProvider store={store}>
   <PaperProvider theme={theme}>
    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    <Navigation />
   </PaperProvider>
  </StoreProvider>
 )
}
