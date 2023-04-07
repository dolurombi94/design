import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import Topmid1 from './Topmid1'

const Topmid = () => {
    return (
        <View style={{ backgroundColor: "#F8F8F8", height: 500, borderTopStartRadius: 35, borderTopRightRadius: 55, marginTop: 30 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15, paddingRight: 40 }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 17 }}>Recomended</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: "green", fontWeight: "bold", fontSize: 17 }}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={Foodelement}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ScrollView>
                            <View style={{ margin: 10, borderRadius: 15, backgroundColor: '#fff' }}>
                                <View style={{ padding: 10, borderRadius: 12 }}>
                                    <View>
                                        <Image source={item.image} style={{ height: 140, width: 200, borderRadius: 20, resizeMode: 'cover' }} />
                                    </View>
                                    <View style={{ position: 'absolute', flexDirection: 'row', marginLeft: 160, padding: 8, backgroundColor: '#f8f8f8', marginTop: 5, borderRadius: 25 }}>
                                        <View>
                                            <Image source={require("../assets/images/star.png")} style={{ width: 15, height: 15 }} />
                                        </View>
                                        <View>
                                            <Text>
                                                {item.rating}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ color: "green", fontWeight: "bold", fontSize: 13 }}>
                                        {item.price}
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>

                    )}

                />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 8,  backgroundColor: '#fff', borderRadius: 20, width: 410, }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 17 }}>Near of You</Text>
                </View>
                <TouchableOpacity >
                    <View style={{marginRight:10}}>
                        <Text style={{ color: "green", fontWeight: "bold", fontSize: 17 }}>
                            See all
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Topmid1 />
        </View>
    )
}
const Foodelement = [
    {
        id: 1,
        image: require("../assets/images/delicious-fried-chicken-plate.jpg"),
        name: 'fried chicken',
        price: "$160",
        rating: 2.3
    },
    {
        id: 2,
        image: require("../assets/images/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.jpg"),
        name: 'tasty burger',
        price: "$170",
        rating: 2.8
    },
    {
        id: 3,
        image: require("../assets/images/tagliatelle-pasta-with-tomatoes-chicken.jpg"),
        name: 'pasta',
        price: "$160",
        rating: 3
    },
    {
        id: 4,
        image: require("../assets/images/pexels-lumn-604969.jpg"),
        name: 'fried chicken',
        price: "$160",
        rating: 2.3
    },
    {
        id: 5,
        image: require("../assets/images/pexels-jan-n-g-u-y-e-n-🍁-699953.jpg"),
        name: 'fried chicken',
        price: "$160",
        rating: 2.3
    },
]
export default Topmid