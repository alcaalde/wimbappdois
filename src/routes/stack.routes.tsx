import { createStackNavigator } from '@react-navigation/stack';
import DrawerRoutes from './drawer.routes';
import Cad from "../screens/Cad";
import Login from "../screens/Login";
import Search from "../screens/Search";
import EsqueciSenha from "../screens/EsqueciSenha";
import InfoOnibus from "../screens/infoOnibus";

type RootStackParamList = {
    login: undefined;
    cadastro: undefined;
    home: undefined;
    senha: undefined;
    infoOnibus: undefined;
  };
  
  const Stack = createStackNavigator<RootStackParamList>();
 
export default function StackRoutes(){
    return (
        
        <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                    name="login" 
                    component={Login} 
                />
                <Stack.Screen 
                    name="cadastro" 
                    component={Cad} 
                />
                <Stack.Screen
                    name="home" 
                    component={DrawerRoutes} 
                />
                
                <Stack.Screen
                    name="senha" 
                    component={EsqueciSenha} 
                />
                <Stack.Screen
                    name="infoOnibus" 
                    component={InfoOnibus} 
                />

                
            </Stack.Navigator>
    )
}