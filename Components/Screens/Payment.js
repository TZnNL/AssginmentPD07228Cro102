import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default ({navigation, route}) =>{
    return (
       <SafeAreaView style={{flex: 1}}>
         <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.topnav} >
                <AntDesign name="back" size={30} color="black"
                onPress={()=>{
                    navigation.goBack()
                }} />
                <Text style={[styles.f22, {textAlign: 'center', width: '80%'}]}>Payment</Text>
                </View>
                <View style={styles.middle} >
                    <View style={styles.card} >
                        <Text style={styles.f18}>Credit Card</Text>
                        <Image style={{width: '100%'}} source={require('../../assets/card.png')}/>
                    </View>
                    <View style={{margin: 10, paddingHorizontal: 25,paddingVertical: 10, flexDirection: 'row', borderWidth: 2, borderRadius: 8, borderColor: 'yellow'}}>
                    <MaterialIcons name="local-shipping" size={24} color="black" />
                    <Text  style={[styles.f18,{marginHorizontal: 15}]} >Thanh toan khi nhan hang</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container2}>
                        <View style={styles.container71} >
                            <Text style={[styles.f14, {}]}>Total price</Text>
                            <View style={styles.container711}>
                                <Text style={{fontSize: 17, color: 'orange',marginRight: 5 }}>$</Text>
                                <Text style={styles.f18}>{route?.params?.tongtien}</Text>
                            </View>
                        </View>
                        <View 
                             >
                            <TouchableOpacity
                            style={styles.container72}
                            onPress={()=>{
                                navigation.replace('ThanksScr', {})
                            }}>
                                <Text style={{fontSize: 19, fontWeight: 'bold', color: 'white'}}
                                >Pay</Text>
                            </TouchableOpacity>
                        </View>
                </View>
        </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        paddingHorizontal: '5%',
        backgroundColor: 'pink'
    },
    container1: {
        width: '100%',
        height: '90%',
        backgroundColor: 'purple'
    },
    container2:{
        width: '100%',
        height: '10%',
        backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    topnav:{
        marginTop: 40,
        width: '100%',
        height: 70,
        flexDirection: 'row'
    }, f22:{
        fontSize: 22,
        color: 'white', 
        fontWeight: 'bold'
    }, f18:{
        fontSize: 18,
        color: 'white', 
        fontWeight: 'bold'
    },
    middle:{
        width: '100%',
        height: '80%',
        backgroundColor: 'green',

    },
    card:{
        width: '100%',
        height: 'auto',
        padding: '3%',
        borderWidth: 2,
        borderRadius: 16,
        borderColor: 'orange'
    }, container7:{
        width: '100%',
        height: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '5%',
        backgroundColor: 'black'
    },
    container71:{
        width: '40%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    container711:{
        width: '100%',
        height: 30,
        flexDirection: 'row'        
    },
    container72:{
        width: 200,
        height: 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14
    },

})