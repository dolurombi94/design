import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Topmid = () => {
  return (
    <View style={{ marginLeft: 5, marginRight: 5, backgroundColor: '#fff', borderRadius: 30, height: 0.5,  }}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Recomended</Text>
          </View>
          <TouchableOpacity style={{marginRight:20,marginTop:8}}>
            <Text style={{ color: '#4abbb6', fontWeight: "bold" }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Topmid