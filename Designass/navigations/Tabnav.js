import { View, Text,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';


const Tab = createBottomTabNavigator();

const Tabnav = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon:()=>{
            return (
              <View
              style={{paddingTop:12,alignItems:'center',justifyContent:'center'}}
              
              >
                <Image source={require('../assets/icons/home.png')} style={{width:12,height:12,tintColor:'#9d4edd'}}/>
    
              </View>
            )
          }
        }}/>
      <Tab.Screen name='Search' component={Search} />
    </Tab.Navigator>
  )
}

export default Tabnav