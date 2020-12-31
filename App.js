import React from 'react'
import {View} from 'react-native'
import SignUpLoginScreen from './screens/SignUpLoginScreen'
import { SafeAreaProvider } from 'react-navigation'


export default function App() {
    return(
      <SafeAreaProvider>

     <SignUpLoginScreen/>

     </SafeAreaProvider>
    )
  }
