import { View, Text, Image, TouchableOpacity, FlatList, ScrollView ,SafeAreaView} from 'react-native'
import React from 'react'

const Topmid1 = () => {
    return (
        <FlatList
            data={Foodlist}
            horizontal
            keyExtractor={Foodlist => Foodlist.key}
            renderItem={({ item }) => (
               <View >
                 <ScrollView style={{ }}>
                    <SafeAreaView>
                    <View >
                        <View style={{marginBottom:400}}>
                            <Image source={item.image} style={{ height: 140, width: 210, borderRadius: 25, backgroundColor: '#f6f6f6' }} />
                        </View>
                    </View>
                    </SafeAreaView>
                </ScrollView>
               </View>

            )}


        />

    )
}
const Foodlist = [
    {
        image: require('../assets/images/download.png') ,
        key: 1
    },
    {
        image: require('../assets/images/images.png'),
        key: 2
    }
]

export default Topmid1