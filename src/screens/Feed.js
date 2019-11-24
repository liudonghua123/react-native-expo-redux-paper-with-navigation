import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper'

import { login, logout } from '../store/actions/Auth'
import { isLoggedInSelector } from '../store/reducers/Auth'

export default function HomeScreen() {
 const isLoggedIn = useSelector(isLoggedInSelector)
 const dispatch = useDispatch()

 return (
  <View style={styles.container}>
   <Text style={styles.getStartedText}>{isLoggedIn ? "I'm LoggedIn" : 'go away!'}</Text>

   <Button
    mode="contained"
    onPress={() => {
     return isLoggedIn ? dispatch(logout()) : dispatch(login())
    }}>
    {isLoggedIn ? 'Logout' : 'Login'}
   </Button>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
})
