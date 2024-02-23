import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const heightscr = Dimensions.get('window').height;
export default ({navigation , route}) =>{
    const coffeeobj = route?.params?.coffee;
    const [favoriteCheck, setFavoriteCheck] = useState(coffeeobj.favorite)
    const IconForType = () => {         
        return coffeeobj.type == 'coffee' ? <Feather name="coffee" size={30} color="orange" /> : <FontAwesome5 name="cannabis" size={30} color="orange" />; 
    }
    const sizeCoffee = ['S','M','L']
    const [SizeSel, SetSzize] = useState(sizeCoffee[0])

    const setPriceTxt = (price) =>{
        if(SizeSel == 'S'){ 
            return price
        }else if(SizeSel == 'M'){
            return price += 1
        }else {
            return price += 2
        }
    }
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'black'}} >
 <ScrollView style={styles.container}>
            <View> 
            <MaterialIcons name="favorite" size={30} color={favoriteCheck ? 'red': 'gray'} style={{position: 'absolute', top: 30, right: 20, zIndex: 1}
            } onPress={() => {setFavoriteCheck(coffeeobj.favorite = !favoriteCheck)}} />
                <Image source={{uri : coffeeobj.img}} 
                style={{width: '100%', height: 'null', aspectRatio: '16/18'}}/>
                <View style={styles.container2}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                        <Text style={styles.f18}>{coffeeobj.name}</Text>
                        <Text style={styles.f15}>{coffeeobj.country}</Text>
                        </View>
                        <View style={styles.container3}>
                        <View style={styles.container4}>
                            <IconForType/>
                        <Text style={styles.f14}>{coffeeobj.type}</Text>
                        </View>
                        <View style={styles.container4}>
                        <Feather name="map-pin" size={30} color="orange" />
                        <Text style={styles.f14}>{coffeeobj.country}</Text>
                        </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7}}>
                        <View style={{flexDirection: 'row'}}>
                        <AntDesign name="star" size={24} color="orange" />
                        <Text style={styles.f18}>{coffeeobj.star}</Text>
                        </View>
                        <View style={{marginRight: 8,paddingVertical: 8, paddingHorizontal: 15, borderRadius: 12, backgroundColor: 'black'}}>
                            <Text style={styles.f14}>Medium Roasted</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container5} >
                    <Text style={[styles.f16, {marginVertical: 18}]} >Description</Text>
                    <Text style={styles.f15}>{coffeeobj.description}</Text>
                </View>
                
            </View>
        </ScrollView>
        <View style={{width: '100%', height: '20%', position: 'absolute', bottom: 0}}>
        <View style={styles.container6}>
                <TouchableOpacity style={styles.touchwrap}
                            >
                        {sizeCoffee.map((item, index)=>{
                            return <Text style={[styles.Grmbtn,{fontSize: 16, 
                                color: item == SizeSel ? 'orange' : 'white',
                                borderWidth: 2,
                                borderColor: item == SizeSel? 'orange': 'white'}]
                            } key={index}
                             onPress={()=>{
                                SetSzize(item)
                             }}>{item}</Text>;
                        })}
                    </TouchableOpacity>
                </View>
                <View style={styles.container7}>
                        <View style={styles.container71} >
                            <Text style={[styles.f14, {}]}>price</Text>
                            <View style={styles.container711}>
                                <Text style={{fontSize: 17, color: 'orange',marginRight: 5 }}>$</Text>
                                <Text style={styles.f18}>{setPriceTxt(coffeeobj.price)}</Text>
                            </View>
                        </View>
                        <View style={styles.container72} >
                            <TouchableOpacity>
                                <Text style={{fontSize: 19, fontWeight: 'bold', color: 'white'}}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '80%',
        backgroundColor: 'black',
    },
    container1:{
        width: '100%',
        height: '80%',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2:{
        width: '100%',
        height: 140,
        marginTop: -140,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: '5%',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        
    },
    container3:{
        flexDirection: 'row'
    },
    container4:{
        width: 60,
        height: 60,
        marginHorizontal: 7,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    container5:{
        width: '90%',
        marginHorizontal: '5%'
    },
    container6:{
        width: '90%',
        height: 50,
        marginTop: 25,
    },
    container7:{
        width: '90%',
        height: 100,
        marginTop: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: '5%',
        paddingBottom: 18
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
        width: '60%',
        height: 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14
    },
    touchwrap:{
        width: '100%',
        height: 50,
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    Grmbtn:{
        width: '26%',
        textAlign: 'center',
        alignContent: 'center',
        paddingHorizontal: 15, 
        borderRadius: 8,
        paddingVertical: 10
    }
    ,
    f18:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    f14:{
        fontSize: 12,
        color: 'gray',
    },
    f15:{
        fontSize: 15,
        color: 'gray',
    },
    f16:{
        fontSize: 16,
        color: 'white',
    }
})