import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import Tophome from '../component/Tophome'
import Topmid from '../component/Topmid'
import Topmid1 from '../component/Topmid1'
import Buttomhome from '../component/Buttomhome'


const Home = () => {
  return (
    <View>
      <SafeAreaView>
        <Tophome/>
        <Topmid/>
        <Topmid1/>
        <Buttomhome/>
      </SafeAreaView>
    </View>
  )
}

export default Home