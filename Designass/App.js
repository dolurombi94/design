import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import Tabnav from './navigations/Tabnav';


const App = () => {
  return (
    <NavigationContainer>
      <Tabnav/>
    </NavigationContainer>
  )
}

export default App