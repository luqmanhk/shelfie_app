import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from "../constants/colors"

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    < Stack screenOptions = {{
      headerStyle: { backgroundColor: '#ddd' },
      headerTintColor: "#333"
    }}> 
      <Stack.Screen name = "index" options = {{ title: 'Home'}}/>
      <Stack.Screen name = "about" options = {{ title: 'About Us'}}/>
      <Stack.Screen name = "contact" options = {{ title: 'Contact Us', headerShown: false }}/>
    </Stack>

  )
}

export default RootLayout

const styles = StyleSheet.create({})


/*
Stack:
|
| |
| |
| |contact
| |about
| |index
-----
*/
