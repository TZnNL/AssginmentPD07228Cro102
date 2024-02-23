import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, View, Text, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Coffee from "../../data/Coffee";
const heightscr = Dimensions.get('window').height;
export default ({ navigation, route }) => {
    const getListFavorite = () => {
        return coffeeList.filter(item => item._favorite)
    };
    const removeItem = (item) => {
        for (const coffee of coffeeList) {
            if( coffee._id == item){
                coffee._favorite = !coffee._favorite
                console.log(coffee, 'dasdas');
            }
        }
        getListFavorite(); // This function call doesn't seem necessary
    };
    
    const CardCoffee = ({ item }) => {
        const [favoriteCheck, setFavoriteCheck] = useState(item.favorite);
        const IconForType = () => {         
            return item.type == 'coffee' ? <Feather name="coffee" size={30} color="orange" /> : <FontAwesome5 name="cannabis" size={30} color="orange" />; 
        }
        return (
            <View style={styles.cardContainer}>
                <MaterialIcons
                    name="favorite"
                    size={30}
                    color={favoriteCheck ? 'red' : 'gray'}
                    style={{ position: 'absolute', top: 30, right: 20, zIndex: 1 }}
                    onPress={() => { 
                        setFavoriteCheck(!favoriteCheck) 
                        removeItem(item)
                    }}
                />
                <Image
                    source={{ uri: item.img }}
                    style={{ width: '100%', height: 'auto', aspectRatio: '16/16' }} // Adjust the height as needed
                />
                 <View style={styles.container2}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.f18}>{item.name}</Text>
                        <Text style={styles.f15}>{item.country}</Text>
                    </View>
                    <View style={styles.container3}>
                        <View style={styles.container4}>
                            <IconForType/>
                            <Text style={styles.f14}>{item.type}</Text>
                        </View>
                        <View style={styles.container4}>
                            <Feather name="map-pin" size={30} color="orange" />
                            <Text style={styles.f14}>{item.country}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign name="star" size={24} color="orange" />
                        <Text style={styles.f18}>{item.star}</Text>
                    </View>
                    <View style={{ marginRight: 8, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 12, backgroundColor: 'black' }}>
                        <Text style={styles.f14}>Medium Roasted</Text>
                    </View>
                </View>
               
            </View>
            <View style={styles.container5}>
                <Text style={[styles.f16, { marginVertical: 18 }]}>Description</Text>
                <Text style={styles.f15}>{item.description}</Text>
            </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ width: '100%', paddingHorizontal: '5%', }}>
                <FlatList
                    data={getListFavorite()}
                    renderItem={({ item }) => <CardCoffee item={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
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
        marginHorizontal: '5%', 
        
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
    }, cardContainer:{width: '100%', height: 600, 
    borderWidth: 2,
    borderColor: 'yellow', 
    borderRadius: 12,
marginVertical: 20}
})



const coffeeList = [
    new Coffee(1, 'Espresso', 3.99, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.5, 'A strong and concentrated coffee It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(2, 'Latte', 4.49, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.3, 'A coffee drink made with espresso and steamed milk It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', false, 'VietNam'),
    new Coffee(3, 'Cappuccino', 4.99, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.4, 'An espresso-based coffee drink that originated in Italy It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(4, 'Americano', 3.79, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.2, 'A coffee drink prepared by diluting espresso with hot water It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(5, 'Macchiato', 4.29, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.6, 'An espresso coffee drink with a small amount of milk', 'bean', true, 'VietNam'),
    new Coffee(6, 'Mocha', 4.59, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.4, 'A coffee drink with chocolate syrup, espresso, and steamed milk It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(7, 'Flat White', 4.69, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.3, 'A coffee drink made with espresso and microfoam (steamed milk with small, fine bubbles) It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(8, 'Iced Coffee', 4.29, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.2, 'A coffee drink served cold with ice cubes', 'coffee It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', true, 'VietNam'),
    new Coffee(9, 'Frappuccino', 4.79, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.5, 'A blended coffee drink with ice and other flavorings It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(10, 'Affogato', 4.99, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.6, 'A coffee-based dessert made by pouring a shot of hot espresso over a scoop of ice creamIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam')
];