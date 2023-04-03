import { View,Text,TouchableOpacity } from 'react-native'
import React from 'react'

const Buttomhome = () => {
    return (
        <View>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:1,borderRadius:30,width:400,marginLeft:10,marginTop:20,borderColor:'#f6f6f6' }}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Recomended</Text>
                    </View>
                    <TouchableOpacity style={{ marginRight: 20, marginTop: 8 }}>
                        <Text style={{ color: '#4abbb6', fontWeight: "bold" }}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Buttomhome