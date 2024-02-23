import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
const WidthS = Dimensions.get('window').width;
import Coffee from '../../data/Coffee';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const HeightS = Dimensions.get('window').height;

function CoffeeView({ item }) {
    return (
      <LinearGradient
        colors={['#070F2B', '#B5C0D0']} // Mảng chứa các màu sẽ tạo thành gradient
        start={[0, 1]} // Điểm bắt đầu của gradient (tọa độ x, y)
        end={[0.5, 1]}   // Điểm kết thúc của gradient (tọa độ x, y)
        style={{
          width: 200,
          height: 350,
          margin: 10,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden', // Đảm bảo nội dung không bị tràn ra ngoài phần nền gradient
        }}
      >
        <View style={{right: 0, position: 'absolute', zIndex: 1, backgroundColor: 'gray', width: 80, borderBottomLeftRadius: 18,paddingLeft: 15, top: 0,paddingVertical: 2, flexDirection: 'row'}}>
        <AntDesign name="star" size={20} color="yellow" />
      
        <Text style={{color:'white',marginLeft: 7}}>{item.star}</Text>
        </View>
        
        <Image source={{ uri: item.img }} style={{ width: '90%', height: 200, borderRadius: 12 }} />
        <Text style={{ width: '90%', fontWeight: 'bold', color: 'white', fontSize: 18 }}>{item.name}</Text>
        <Text numberOfLines={2} style={{ width: '90%', color: 'white' }}>{item.description}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: 'white', fontSize: 22 }}>$ {item.price}</Text>
          <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'orange', borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
            <AntDesign name="plus" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
export default ({ navigation }) => {
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         // Thực hiện hành động chuyển hướng sau 1000ms
    //         navigation.replace('LoginScr');
    //     }, 1000);

    //     // Xóa bộ đếm thời gian khi component unmount
    //     return () => clearTimeout(timer);
    // }, [navigation]);
const [navItem, setnavItem] = useState(0);
    
    return (
        <SafeAreaView>
         <ScrollView>
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
                    <Image
                    style={{width: 50, height: 50}}
                    source={{uri : 'https://cdn1.iconfinder.com/data/icons/adventure-activities-flat/512/run_exercise_training_jogging_fitness_runner_marathon_sport_motion_athlete_outdoor-512.png'}} />
              </View>
              <Text style={styles.Txt1}>Find the best</Text>
              <Text style={styles.Txt1}>coffee for you</Text>
              <TextInput style={styles.Edt1} placeholder={'Find Your Coffee'}></TextInput>
                <ScrollView horizontal

                  >{NavList.map((item, index)=>(
                    <Text key={index} style={{ fontSize: 15, color: index === navItem ? 'orange' : 'gray', 
                        marginHorizontal: 15 }}
                        onPress={() => setnavItem(index)}
                        >{item}</Text>
                  ))}</ScrollView>
               <FlatList 
                    horizontal
                    data={coffeeList}
                    renderItem={({item, index}) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('CoffeDetailScr', {'coffee': coffeeList[index]})
                            handleCoffeePress(index)
                        }}>
                            <CoffeeView item={item}/>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()} // Sử dụng ID của mỗi mục làm key
                />    
                    <Text>Coffee beans</Text>
                 <FlatList 
                        horizontal
                        data={coffeeList1}
                        renderItem={({item, index})=>(
                          <TouchableOpacity 
                          onPress={()=>{
                            navigation.navigate('CoffeDetailScr', {'coffee': coffeeList1[index]})
                            handleCoffeePress(index)
                        }}>
                            <CoffeeView item={item}/>
                          </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()} // Sử dụng ID của mỗi mục làm key
                    />
            </View>
         </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    TopNav:{
        marginTop: 50,
        marginBottom: 30,
        paddingHorizontal: 25,
        flexDirection: 'row', width: '100%', height: 50, backgroundColor: 'pink', justifyContent: 'space-between', alignItems: 'center'
    },
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
    }
})

const NavList = ['All' , 'Capuchino', 'Espresso', 'Americano', 'Maccrosophia']
const coffeeList = [
    new Coffee(1, 'Espresso', 3.99, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.5, 'A strong and concentrated coffee It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(2, 'Latte', 4.49, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.3, 'A coffee drink made with espresso and steamed milk It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', false, 'VietNam'),
    new Coffee(3, 'Cappuccino', 4.99, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.4, 'An espresso-based coffee drink that originated in Italy It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(4, 'Americano', 3.79, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.2, 'A coffee drink prepared by diluting espresso with hot water It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(5, 'Macchiato', 4.29, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.6, 'An espresso coffee drink with a small amount of milk', 'coffee It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', true, 'VietNam'),
    new Coffee(6, 'Mocha', 4.59, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.4, 'A coffee drink with chocolate syrup, espresso, and steamed milk It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(7, 'Flat White', 4.69, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.3, 'A coffee drink made with espresso and microfoam (steamed milk with small, fine bubbles) It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(8, 'Iced Coffee', 4.29, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.2, 'A coffee drink served cold with ice cubes', 'coffee It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', true, 'VietNam'),
    new Coffee(9, 'Frappuccino', 4.79, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.5, 'A blended coffee drink with ice and other flavorings It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam'),
    new Coffee(10, 'Affogato', 4.99, 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg', 4.6, 'A coffee-based dessert made by pouring a shot of hot espresso over a scoop of ice creamIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'coffee', true, 'VietNam')
];

const coffeeList1 = [
    new Coffee(1, 'Espresso Gold', 4.99, 'https://i.pinimg.com/564x/34/e7/84/34e7848f7d9fa2e96f57af05d37c0e94.jpg', 4.5, 'A strong and concentrated coffee with a touch of gold It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'bean', true, 'VietNam'),
    new Coffee(2, 'Caramel Latte', 5.49, 'https://i.pinimg.com/564x/34/e7/84/34e7848f7d9fa2e96f57af05d37c0e94.jpg', 4.3, 'A coffee drink made with espresso, steamed milk, and caramel syrup It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'bean', true, 'VietNam'),
    new Coffee(3, 'Hazelnut Cappuccino', 5.99, 'https://i.pinimg.com/564x/34/e7/84/34e7848f7d9fa2e96f57af05d37c0e94.jpg', 4.4, 'An espresso-based coffee drink with hazelnut flavor and frothed milkIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'bean', true, 'VietNam'),
    new Coffee(4, 'Vanilla Americano', 4.79, 'https://i.pinimg.com/564x/34/e7/84/34e7848f7d9fa2e96f57af05d37c0e94.jpg', 4.2, 'A coffee drink prepared by diluting espresso with hot water and vanilla flavoringIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'bean', true, 'VietNam'),
    new Coffee(5, 'Macchiato Supreme', 5.29, 'https://i.pinimg.com/564x/34/e7/84/34e7848f7d9fa2e96f57af05d37c0e94.jpg', 4.6, 'An espresso coffee drink with a small amount of milk and a sprinkle of cocoa powdeIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingr', 'bean', true, 'VietNam'),
    new Coffee(6, 'Chocolate Mocha', 5.59, 'https://i.pinimg.com/564x/34/e7/84/34e7848f7d9fa2e96f57af05d37c0e94.jpg', 4.4, 'A coffee drink with chocolate syrup, espresso, and steamed milkIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'bean', true, 'VietNam'),
    new Coffee(7, 'Cinnamon Flat White', 5.69, 'https://i.pinimg.com/564x/34/e7/84/34e7848f7d9fa2e96f57af05d37c0e94.jpg', 4.3, 'A coffee drink made with espresso, microfoam, and a sprinkle of cinnamIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingon', 'bean', true, 'VietNam'),
    new Coffee(8, 'Iced Caramel Macchiato', 5.29, 'https://i.pinimg.com/564x/34/e7/84/34e7848f7d9fa2e96f57af05d37c0e94.jpg', 4.2, 'A coffee drink served cold with ice cubes, milk, and caramel syrIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingup', 'bean', true, 'VietNam'),
    new Coffee(9, 'Mint Frappuccino', 5.79, 'https://i.pinimg.com/564x/34/e7/84/34e7848f7d9fa2e96f57af05d37c0e94.jpg', 4.5, 'A blended coffee drink with ice, milk, and mint flavoriIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingng', 'bean', true, 'VietNam'),
    new Coffee(10, 'Raspberry Affogato', 5.99, 'https://i.pinimg.com/564x/34/e7/84/34e7848f7d9fa2e96f57af05d37c0e94.jpg', 4.6, 'A coffee-based dessert made by pouring a shot of hot espresso over a scoop of raspberry sorbetIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', 'bean', true, 'VietNam')
];

const handleCoffeePress = (index) => {
    console.log(coffeeList[index]);

    // return coffeeList[index]

};