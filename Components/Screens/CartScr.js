import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
const WidthS = Dimensions.get('window').width;
import { Entypo } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import Coffee from '../../data/Coffee';
import Cart from "../../data/Cart";
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const HeightS = Dimensions.get('window').height;



export default ({ navigation }) => {
    const [navItem, setnavItem] = useState(0);
    const [tongtien ,settongtien] = useState(0)
    const CalculateTotalPrice = () =>{
        let total = 0;
        for (const item1 of cartItems){
            total += item1._quantity * item1._price
        }
        settongtien(total)
    }
    useEffect(()=>{
        CalculateTotalPrice()
    },[])
    function CartView({ item }) {
        const [quantity, setQuantity] = useState(item._quantity);
        const totalPrice = (quantity, price) => {
            return Number((quantity * price).toFixed(2))
        }
        const handleMinus = () =>{
            if (item._quantity < 1) {
                Toast.show({
                    type: 'notification',
                    text1: 'Thông báo',
                    text2: 'Xóa sản phẩm khỏi giỏ hàng',
                    visibilityTime: 3000,
                    autoHide: true
                });
                setQuantity(item._quantity);
                item._quantity = 0
                
            }
            CalculateTotalPrice()
        }
        return (
          <LinearGradient
            colors={['#070F2B', '#B5C0D0']} // Mảng chứa các màu sẽ tạo thành gradient
            start={[0, 1]} // Điểm bắt đầu của gradient (tọa độ x, y)
            end={[0.5, 1]}   // Điểm kết thúc của gradient (tọa độ x, y)
            style={{
              width: '90%',
              height: 240,
              marginHorizontal: '2.5%',
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden', 
              marginVertical: 5// Đảm bảo nội dung không bị tràn ra ngoài phần nền gradient
            }}
          >
            {item && (
                <View style={styles.cartLayout}>
                    <View style={styles.cartLayout1}>
                        <Image source={{uri: item.img}}
                                style={{width: '40%',height: 160, borderRadius: 8}}
                        />
                        <View style={{width: '60%',height: 160, marginHorizontal: 15, justifyContent: 'space-between', height: 100, alignItems: 'flex-start'}} >
                            <Text style={styles.f18}>{item.nameCoffee}</Text>
                            <Text style={styles.f14}>{item.description}</Text>
                            <Text style={[{backgroundColor: 'gray', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12, color: 'white'}, styles.f14.color= 'white']}>Medium Roasted</Text>
                        </View>
                    </View>
                    <View style={styles.cartLayout2}>
                        <Text style={[styles.f18,{ paddingHorizontal: 15, marginHorizontal: 10}]} >{item.size}</Text>
                        <Text style={{color: 'orange', fontSize: 16}}>$ </Text>
                        <Text style={styles.f18}>{totalPrice(item._quantity, item._price)} </Text>
                        <Entypo name="minus" size={24} color="white" 
                        style = {{backgroundColor: 'orange', padding: 15, borderRadius: 8}}
                        onPress={()=>{
                            setQuantity(quantity- 1);
                            item._quantity --
                            console.log(item._quantity);
                             handleMinus()
                        }}/>
    
                        <Text style={[styles.f18, { paddingVertical: 10, paddingHorizontal: 20, borderWidth: 2, borderColor: 'orange', borderRadius: 8, color: 'white'}]}>{item.quantity}</Text>
                        <AntDesign name="plus" size={24} color="white" 
                        style = {{backgroundColor: 'orange', padding: 15, borderRadius: 8}}
                        onPress={()=>{
                            setQuantity(quantity + 1);
                            item._quantity ++
                            console.log(item._quantity);
                            CalculateTotalPrice()
    
                        }}
                        />
                    </View>
                </View>
            )}
          </LinearGradient>
        );
    }
    return (
        <SafeAreaView>
            <ScrollView style={{width: '100%', height: '90%'}}>
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'pink',
                        alignItems: 'center'
                    }}
                >
                    <View style={styles.TopNav}>
                        <AntDesign name="appstore1" size={24} color="gray" />
                        <Text style={styles.f20}>Cart</Text>
                        <Image
                        style={{width: 50, height: 50}}
                        source={{uri : 'https://cdn1.iconfinder.com/data/icons/adventure-activities-flat/512/run_exercise_training_jogging_fitness_runner_marathon_sport_motion_athlete_outdoor-512.png'}} />
                    </View>
                
                    <FlatList
                        data={cartItems}
                        renderItem={({ item }) => <CartView item={item} />}
                        keyExtractor={(item) => item.id.toString()} // Cần chuyển ID sang chuỗi
                    />
                </View>
            </ScrollView>
            <View style={styles.container7}>
                        <View style={styles.container71} >
                            <Text style={[styles.f14, {}]}>Total price</Text>
                            <View style={styles.container711}>
                                <Text style={{fontSize: 17, color: 'orange',marginRight: 5 }}>$</Text>
                                <Text style={styles.f18}>{tongtien.toFixed(2)}</Text>
                            </View>
                        </View>
                        <View 
                             >
                            <TouchableOpacity
                            style={styles.container72}
                            onPress={()=>{
                                navigation.navigate('Payment', {'tongtien': tongtien.toFixed(2)})
                            }}>
                                <Text style={{fontSize: 19, fontWeight: 'bold', color: 'white'}}
                                >Pay</Text>
                            </TouchableOpacity>
                        </View>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    TopNav:{
        marginTop: 30,
        marginBottom: 10,
        paddingHorizontal: 25,
        flexDirection: 'row',
         width: '100%', 
         height: 50, 
         backgroundColor: 'pink', 
         justifyContent: 'space-between', 
         alignItems: 'center'
    },
    cartLayout:{
        width: '96%',
        marginHorizontal: '2%'
    },
    cartLayout1:{
        width: '100%',
        flexDirection: 'row'
    },
    cartLayout2:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    , 
    Txt1:{
        width: '90%',
        color:'white',
        fontSize: 30, fontWeight: 'bold',
        alignContent: 'flex-start',
       
    },
    Edt1:{
        width: '90%',
        height: 50,
        alignContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 12, 
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        marginTop: 45,
        marginBottom: 25
    },
    f18:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    f14:{
        color: 'gray',
        fontSize: 14,
    },
    f20:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
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


const cartItems = [
    new Cart(1, 101, 201, 2, 'M', 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 'Espresso', 'A classic espresso shot', 4.99),
    new Cart(2, 102, 202, 1, 'S', 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 'Latte', 'Creamy and smooth latte', 4.99),
    new Cart(3, 103, 203, 3, 'L', 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 'Cappuccino', 'A frothy cappuccino with chocolate dusting', 4.99),
    new Cart(4, 104, 204, 1, 'M', 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 'Mocha', 'Rich and chocolatey mocha', 4.99),
    new Cart(5, 105, 205, 2, 'M', 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 'Macchiato', 'A bold espresso with a dollop of foam', 4.99),
    new Cart(6, 106, 206, 1, 'M', 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 'Americano', 'Smooth and strong americano', 4.99),
    new Cart(7, 107, 207, 3, 'M', 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 'Iced Coffee', 'Refreshing iced coffee', 4.99),
    new Cart(8, 108, 208, 2, 'L', 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 'Flat White', 'Creamy and velvety flat white', 4.99),
    new Cart(9, 109, 209, 1, 'L', 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 'Affogato', 'Decadent affogato with vanilla ice cream', 4.99),
    new Cart(10, 110, 210, 2, 'L', 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 'Turkish Coffee', 'Strong and aromatic Turkish coffee', 4.99)
];