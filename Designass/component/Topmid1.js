import { View, Text, Image } from 'react-native'
import React from 'react'

const Topmid1 = () => {
    return (
        <View style={{ marginTop: 10, backgroundColor: '#fff', borderRadius: 20, width: 403, marginLeft: 5 }}>
            <View style={{ flexDirection:'row',}}>
                <View style={{ padding: 10 }}>
                    <Image source={require("../assets/images/pexels-pixabay-60616.jpg")} style={{ width: 60, height: 60, borderRadius: 15 }} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <View style={{ marginTop: 15,marginLeft:10,}}>
                        <View>
                            <Text style={{fontWeight:"bold"}}>Big fried chicken</Text>
                            <Text style={{color:'gray'}}>Lagos 9.2 KM</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require("../assets/images/star.png")} style={{ width: 15, height: 15 }} />
                            <Text>4.4</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 160, marginTop: 10 }}>
                        <Text style={{color:'green',fontWeight:'bold'}}>$ 48</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}
export default Topmid1