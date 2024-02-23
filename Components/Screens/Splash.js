import React, { useEffect } from "react";
import { Image, SafeAreaView, View } from "react-native";

export default ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // Thực hiện hành động chuyển hướng sau 1000ms
            navigation.replace('LoginScr');
        }, 1000);

        // Xóa bộ đếm thời gian khi component unmount
        return () => clearTimeout(timer);
    }, [navigation]);
    
    return (
        <SafeAreaView>
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={require('../../assets/spllogo.png')}
                    style={{
                        width: '50%',
                        height: 150
                    }}
                />
            </View>
        </SafeAreaView>
    )
}
