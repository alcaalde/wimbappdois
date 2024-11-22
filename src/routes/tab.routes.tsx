// Importação dos componentes necessários
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { Feather } from '@expo/vector-icons'; 

// Importação das telas para as rotas
import Mapa from "../screens/Rota"; 
import Profile from "../screens/Profile"; 
import News from "../screens/News";

// Criação do Tab Navigator
const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator 
            // Configurações do TabBar
            screenOptions={{
                headerShown: false, // Ocultar cabeçalho
                tabBarStyle: { backgroundColor: '#EBCB4A' }, // Cor de fundo do TabBar
                tabBarActiveTintColor: 'black', // Cor dos ícones ativos
                tabBarInactiveTintColor: 'white', // Cor dos ícones inativos
            }}>

            {/* Rota para o mapa */}
            <Tab.Screen 
                name="mapa"
                component={Mapa}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="map-pin" color={color} size={size} />, // Ícone do mapa
                    tabBarLabel: ' ' // Sem rótulo de texto
                }}
            />

            {/* Rota para notícias */}
            <Tab.Screen 
                name="news"
                component={News}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="book-open" color={color} size={size} />, // Ícone de notícias
                    tabBarLabel: ' ' // Sem rótulo de texto
                }}
            />

            {/* Rota para perfil */}
            <Tab.Screen 
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="user" color={color} size={size} />, // Ícone de perfil
                    tabBarLabel: ' ' // Sem rótulo de texto
                }}
            />
        </Tab.Navigator>
    )
}
