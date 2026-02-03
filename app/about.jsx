import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import { Colors } from "../constants/colors"

const About = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>About Page</Text>

      <Link href = "/" style = {styles.link} >Go Back Home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})