import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScr from '../Components/Screens/HomeScr';
import CartScr from '../Components/Screens/CartScr';
import FavouriteScr from '../Components/Screens/FavouriteScr';
import OrderHistoryScr from '../Components/Screens/OrderHistoryScr';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Tabarr = [
  { route: "Home", label: "Home", component: HomeScr },
  { route: "Cart", label: "Cart", component: CartScr },
  { route: "Favourite",label: "Favourite", component: FavouriteScr },
  { route: "OrderHistory",label: "OrderHistory", component: OrderHistoryScr },
];
export default () => {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={({route}) =>({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarIcon: ({focused, color,size}) =>{
          if(route.name == 'Home'){
            return <FontAwesome name="home" size={24} color={focused ? 'pink' : 'black'} />
          }
          if(route.name == 'Cart'){
            return <FontAwesome name="shopping-cart" size={24} color={focused ? 'pink' : 'black'}/>
          }
          if(route.name == 'Favourite'){
            return <MaterialIcons name="favorite" size={24} color={focused ? 'pink' : 'black'}/>
          }
          if(route.name == 'OrderHistory'){
            return <FontAwesome5 name="history" size={24} color={focused ? 'pink' : 'black'} />
          }
        }
      })}
    >
      {Tabarr.map((tab) => (
        <Tab.Screen
          key={tab.route}
          name={tab.route}
          component={tab.component}
        />
      ))}
    </Tab.Navigator>
  );
}
