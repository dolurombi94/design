import { View, Text, StyleSheet,ImageBackground,TouchableOpacity,TextInput ,Image} from 'react-native'
import React, { useState } from 'react'
import Topmid from './Topmid'
import Topmid1 from './Topmid1'

const image = require("../assets/images/manu-schwendener-DSwBHyWKiVw-unsplash.jpg")

const Tophome = () => {
  const [search,setSearch]=useState("")

  const Changetxt=({text})=>(
    setSearch(text)
  )
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
          <View style={{ marginTop: 25, marginLeft: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity >
              <Image source={require("../assets/icons/menu.png")} style={{ width: 25, height: 25, tintColor: "#fff" }} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', }}>
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image source={require("../assets/icons/bag.png")} style={{ width: 25, height: 25, tintColor: "#fff" }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/icons/bell.png")} style={{ width: 25, height: 25, tintColor: "#fff" }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 20, marginLeft: 15 }}>
            <View>
              <Text style={{ fontSize: 20, color: '#fff', fontWeight: "bold" }}>Delicious food ready to</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 20, color: '#fff', fontWeight: "bold" }}>
                delivered for you
              </Text>
              <Image source={require("../assets/images/dish.png")} style={{ width: 30, height: 30 }} />
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", borderWidth: 1, width: 370, marginLeft: 15, borderRadius: 30, borderColor: "#fff", marginTop: 25, padding: 10 }}>
            <View>
              <Image source={require("../assets/icons/search-interface-symbol.png")} style={{ width: 25, height: 25, tintColor: "#fff" }} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <TextInput
                placeholder='Search food would you like tom order'
                placeholderTextColor={"#fff"} 
                onChangeText={Changetxt}
                value=''/>
            </View>
          </View>
        </View>
        <Topmid/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {


  },
  image: {
    height: 280,
    width: 430
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});


export default Tophome