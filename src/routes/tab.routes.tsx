import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

import Search from "../screens/Search";
import Mapa from "../screens/Rota";
import Profile from "../screens/Profile";
import News from "../screens/News";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        
        <Tab.Navigator screenOptions={{headerShown: false,  tabBarStyle: {
            backgroundColor: '#EBCB4A',
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'white',}}>

            <Tab.Screen 
            name="Search"
            component={Search}
            options={{
                tabBarIcon: ({color, size}) => <Feather name="search" color={color} size={size}/>,
                tabBarLabel: ' '
            }}
            />
            
            <Tab.Screen 
            name="mapa"
            component={Mapa}
            options={{
                
                tabBarIcon: ({color, size}) => <Feather name="map-pin" color={color} size={size}/>,
                tabBarLabel: ' '
            }}
            />

            <Tab.Screen 
            name="news"
            component={News}
            options={{
                
                tabBarIcon: ({color, size}) => <Feather name="book-open" color={color} size={size}/>,
                tabBarLabel: ' '
            }}
            />

            <Tab.Screen 
            name="profile"
            component={Profile}
            options={{
                
                tabBarIcon: ({color, size}) => <Feather name="user" color={color} size={size}/>,
                tabBarLabel: ' '
            }}
            />

        </Tab.Navigator>
    )
}