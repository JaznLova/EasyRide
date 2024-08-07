import React from 'react'
import {Stack} from 'expo-router'
const Layout = () => {
  return (

<Stack>
   <Stack.Screen name='signup' options={{headerShown:false}} />
   <Stack.Screen name='signin' options={{headerShown:false}} />
   <Stack.Screen name='otp' options={{headerShown:false}} />
   <Stack.Screen name='phone' options={{headerShown:false}} />
 </Stack>
  )
}

export default Layout