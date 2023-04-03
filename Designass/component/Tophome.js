import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Tophome = ({ }) => {

    return (
        <View style={{ backgroundColor: '#4abbb6', marginTop: 30, marginLeft: 5, marginRight: 5, borderRadius: 30, height: '40%',}}>

            <View style={{ margin: 20, justifyContent: 'center', }}>
                <View>
                    <ImageBackground>

                    </ImageBackground>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../assets/icons/menu.png')} style={{ width: 25, height: 25, tintColor: '#fff' }} />
                            </View>
                        </TouchableOpacity>

                        <View style={{flexDirection:"row"}}>
                            <TouchableOpacity>
                                <View>
                                    <Image source={require('../assets/icons/bag.png')} style={{ width: 25, height: 25,tintColor: '#fff' }} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                    <Image source={require('../assets/icons/bell.png')} style={{ width: 25, height: 25,tintColor: '#fff'  }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:20,paddingRight:100}}>
                    <Text style={{ fontSize: 20, color: '#fff',fontWeight:'bold' }}>
                        Delicious food ready to be delivered for you
                    </Text>
                </View>
                <View style={{marginTop:40}}>
                    <View style={{ flexDirection: 'row', borderWidth: 0.8, padding: 5, borderRadius: 20, height: 50,borderColor:'#fff' }} >
                        <View>
                        <Image source={require('../assets/icons/search-interface-symbol.png')} style={{ width: 20, height: 20,tintColor: '#fff' }} />
                        </View>
                        <TextInput placeholder='search you would like to eat' placeholderTextColor={'#fff'} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Tophome