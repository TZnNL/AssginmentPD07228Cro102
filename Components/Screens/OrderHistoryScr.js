import React, { useEffect } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Order from '../../data/Order';

export default ({ navigation, route }) => {
    
    const CardOrder = ({ item }) => {
        return (
            <View style={styles.cartContainer}>
                <View style={styles.cartM1}>
                    <View>
                        <Text style={styles.f18}>Order Date</Text>
                        <Text style={styles.f14}>{item.date}</Text>
                    </View>
                    <View>
                        <Text style={styles.f18}>Total Amount</Text>
                        <Text style={styles.f14}>{item.price}</Text>
                    </View>
                </View>
                <View style={styles.cartM2}>
                    <View style={styles.cartItem1}>
                        <Image
                            style={{ width: 60, height: 60, borderRadius: 12 }}
                            source={{ uri: item.img }}
                        />
                        <Text style={styles.f18}>{item.name}</Text>
                        <Text style={styles.f18}>$ {item.price}</Text>
                    </View>
                    <View style={styles.cartItem2}>
                        <Text style={[styles.f18, { paddingHorizontal: 15, paddingVertical: 10 }]}>{item.size}</Text>
                        <Text style={styles.f18}>$ {item.price}</Text>
                        <Text style={styles.f18}> X {item.quantity}</Text>
                        <Text style={styles.f19}>{item.price}</Text>
                    </View>
                </View>
            </View>
        );
    };
    

    return (
        <SafeAreaView style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>
                <View style={styles.topnav} >
                    <AntDesign name="appstore1" size={30} color="green" />
                    <Text style={styles.f22}>Order History</Text>
                    <Image
                        style={{ width: 70, height: 70, borderRadius: 35 }}
                        source={{ uri: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportmale-2-512.png' }}
                    />
                </View>
                <View>
                <FlatList
    data={orders}
    renderItem={({ item }) => <CardOrder item={item} />}
    keyExtractor={(item) => item.id.toString()}
/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '100%',
        backgroundColor: 'pink',
        alignItems: 'center'
    }, 
    topnav: {
        width: '100%',
        height: 70,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cartContainer: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'yellow'
    },
    cartM1: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    f18: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    f19: {
        fontSize: 19,
        color: 'orange',
        fontWeight: 'bold'
    },
    f14: {
        fontSize: 14,
        color: 'gray'
    },
    cartM2: {
        width: '100%',
        padding: 15
    },
    cartItem1: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'green',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cartItem2: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'purple',
        marginTop: 15
    }
});

const orders = [
    new Order(1, new Date().toISOString(), 'https://i.pinimg.com/564x/68/cc/2e/68cc2e285303d7ec54487587ea5bd12e.jpg', 10, 'user1', 'M', 'Product 1'),
    new Order(2, new Date().toISOString(), 'https://i.pinimg.com/564x/68/cc/2e/68cc2e285303d7ec54487587ea5bd12e.jpg', 20, 'user2', 'L', 'Product 2'),
    new Order(3, new Date().toISOString(), 'https://i.pinimg.com/564x/68/cc/2e/68cc2e285303d7ec54487587ea5bd12e.jpg', 30, 'user3', 'S', 'Product 3'),
    new Order(4, new Date().toISOString(), 'https://i.pinimg.com/564x/68/cc/2e/68cc2e285303d7ec54487587ea5bd12e.jpg', 40, 'user4', 'XL', 'Product 4'),
    new Order(5, new Date().toISOString(), 'https://i.pinimg.com/564x/68/cc/2e/68cc2e285303d7ec54487587ea5bd12e.jpg', 50, 'user5', 'M', 'Product 5'),
    new Order(6, new Date().toISOString(), 'https://i.pinimg.com/564x/68/cc/2e/68cc2e285303d7ec54487587ea5bd12e.jpg', 60, 'user6', 'L', 'Product 6'),
    new Order(7, new Date().toISOString(), 'https://i.pinimg.com/564x/68/cc/2e/68cc2e285303d7ec54487587ea5bd12e.jpg', 70, 'user7', 'S', 'Product 7'),
    new Order(8, new Date().toISOString(), 'https://i.pinimg.com/564x/68/cc/2e/68cc2e285303d7ec54487587ea5bd12e.jpg', 80, 'user8', 'XL', 'Product 8'),
    new Order(9, new Date().toISOString(), 'https://i.pinimg.com/564x/68/cc/2e/68cc2e285303d7ec54487587ea5bd12e.jpg', 90, 'user9', 'M', 'Product 9'),
    new Order(10, new Date().toISOString(), 'https://i.pinimg.com/564x/68/cc/2e/68cc2e285303d7ec54487587ea5bd12e.jpg', 100, 'user10', 'L', 'Product 10')
];
