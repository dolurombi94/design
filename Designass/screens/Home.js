import { View, Text,ImageBackground } from 'react-native'
import React from 'react';
import Tophome from '../component/Tophome';



const Home = () => {
  return (
    <View style={{justifyContent:'center',backgroundColor:'#f8f8f8'}}>
      <Tophome/>
    </View>
  )
}

export default Home