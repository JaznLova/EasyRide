import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const UpperContainer = ({lgText,smText}:any) => {
  useFonts({
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
  })
  return (
    <View style={styles.upperContainer}>
        <Text style={styles.largeText}>{lgText}</Text>
        <Text style={styles.smallText}>{smText}</Text>
      </View>
  )
}
export default UpperContainer

const styles = StyleSheet.create({
  upperContainer: {
    // backgroundColor: "yellow",
    flex: 1,
    maxWidth: '60%',
    maxHeight: '30%',
  },
  largeText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 38,
    // fontWeight: "700",
    color: "#0164fe",
  },
  smallText: {
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 5,
    fontSize: 25,
    // fontWeight: "500",
  },
})