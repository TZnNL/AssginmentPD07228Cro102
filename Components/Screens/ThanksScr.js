import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default ({navigation, route}) =>{
    return (
        <ImageBackground style={{flex: 1}} source={require('../../assets/thankimg2.jpg')}>
            <View style={styles.container} >
                <TouchableOpacity 
                onPress={()=>{
                    navigation.replace('BottomTabs')
                }}
                style={{marginTop: 350,paddingHorizontal: 50, paddingVertical: 13, borderWidth: 2, borderColor: 'orange', borderRadius: 12}} >
                    <Text style={{color: 'white', fontSize: 18,}}>Trang chủ</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink'
    }
})