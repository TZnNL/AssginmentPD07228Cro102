import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default ({navigation}) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cfPW, setCfPW] = useState('');

    return (
        <SafeAreaView>
            <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',

            }} >
            
            <Image
                    source={require('../../assets/spllogo.png')}
                    style={{
                        width: '50%',
                        height: 150
                    }}
                />
                <Text style={styles.f24}>Welcome to Lungo!!</Text>
                <Text style={styles.f14}>Register to Continue</Text>
                <Text style={styles.txt}>Name</Text>
                <TextInput style={styles.TxtInput} placeholder="Email Address"></TextInput>
                <Text style={styles.txt}>Email</Text>
                <TextInput style={styles.TxtInput} placeholder="Email Address"></TextInput>
                <Text style={styles.txt}>Password</Text>
                <TextInput style={styles.TxtInput} placeholder="Email Address"></TextInput>
                <Text style={styles.txt}>Re-type Password</Text>
                <TextInput style={styles.TxtInput} placeholder="Email Address"></TextInput>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntxt}>Register</Text>
                </TouchableOpacity>
               
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.f14}>You have an account? Click</Text>
                    <Text style={{marginVertical: 15,color: 'orange', fontWeight:'bold'}}
                    onPress={() => {
                        navigation.goBack()
                    }}>Sign in</Text></View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    f24: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 25
    },
    f14: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 14,
        margin: 15
    },
    TxtInput:{
        width: '90%',
        height: 50,
        paddingHorizontal: 15,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        color: "white",
        // placeholderTextColor: 'white'
    },
    txt: {
        width: '90%',
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 15,
        alignContent: 'flex-start',
        margin: 10
    }, 
    btn:{
        width: '90%',
        height: 70,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        marginVertical: 20
    },
    btntxt:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }, 
    btn1:{
        width: '90%',
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
    },
    btntxt1:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    }
})

function LonginF(us ,pw) {
    
} 