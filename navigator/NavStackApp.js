import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../Components/Screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import LoginScr from "../Components/Screens/LoginScr";
import RegisterScr from '../Components/Screens/RegisterScr';
import NavBottomTabs from '../navigator/NavBottomApp';;
import CoffeDetailScr from '../Components/Screens/CoffeDetailScr';
import Payment from '../Components/Screens/Payment';
import { FontAwesome } from '@expo/vector-icons';
import ThanksScr from '../Components/Screens/ThanksScr';
const Stack = createNativeStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScr" component={Splash} options={{headerShown: false}}/>
                <Stack.Screen name="LoginScr" component={LoginScr} options={{headerShown: false}}/>
                <Stack.Screen name="RegisterScr" component={RegisterScr} options={{headerShown: false}}/>
                <Stack.Screen name='BottomTabs' component={NavBottomTabs} options={{headerShown: false}}/>
                <Stack.Screen name='CoffeDetailScr' component={CoffeDetailScr} options={{headerShown:false}}/>
                <Stack.Screen name='Payment' component={Payment} options={{headerShown:false}}/>
                <Stack.Screen name='ThanksScr' component={ThanksScr} options={{headerShown:false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
