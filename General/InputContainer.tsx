import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const InputContainer = ({children}:any) => {
  useFonts({
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
  })
  return (
    <View style={styles.middleContainer} >
      {children}
    </View>
  )
}

export default InputContainer

const styles = StyleSheet.create({
  middleContainer: {
    // backgroundColor: "yellow",
    top: "15%",
    
  },
})