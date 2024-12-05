import { createStackNavigator } from '@react-navigation/stack';
import DrawerRoutes from './drawer.routes';
import Cad from "../screens/Cad";
import Login from "../screens/Login";
import EsqueciSenha from "../screens/EsqueciSenha";
import InfoOnibus from "../screens/infoOnibus";
import HorarioTela from "../screens/horario"
import Linha813 from '../screens/onibus813';
import SearchScreen from '../screens/telapesquisa';


export type RootStackParamList = {
    login: undefined;
    cadastro: undefined;
    home: undefined;
    senha: undefined;
    infoOnibus: undefined;
    horario: undefined;
    onibus813: undefined;
    telapesquisa: undefined;
    
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
                 <Stack.Screen
                    name="horario" 
                    component={HorarioTela} 
                />
                <Stack.Screen
                    name="onibus813" 
                    component={Linha813} 
                />

               <Stack.Screen 
                name="telapesquisa" 
                component={SearchScreen} 
                 />

                
            </Stack.Navigator>
    )
}