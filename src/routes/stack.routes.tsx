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
        // Definição das telas na navegação em pilha
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
            
            {/* Tela de login */}
            <Stack.Screen 
                name="login" 
                component={Login} 
            />
            
            {/* Tela de cadastro */}
            <Stack.Screen 
                name="cadastro" 
                component={Cad} 
            />
            
            {/* Tela inicial com DrawerRoutes */}
            <Stack.Screen
                name="home" 
                component={DrawerRoutes} 
            />
            
            {/* Tela de recuperação de senha */}
            <Stack.Screen
                name="senha" 
                component={EsqueciSenha} 
            />
            
            {/* Tela de informações sobre o ônibus */}
            <Stack.Screen
                name="infoOnibus" 
                component={InfoOnibus} 
            />
            
            {/* Tela de horários */}
            <Stack.Screen
                name="horario" 
                component={HorarioTela} 
            />
            
            {/* Tela da linha de ônibus 813 */}
            <Stack.Screen
                name="onibus813" 
                component={Linha813} 
            />

            {/* Tela de pesquisa */}
            <Stack.Screen 
                name="telapesquisa" 
                component={SearchScreen} 
            />
            
        </Stack.Navigator>
    )
}
