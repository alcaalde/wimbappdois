// Importações necessárias para navegação em pilha (Stack)
import { createStackNavigator } from '@react-navigation/stack'; 
import DrawerRoutes from './drawer.routes'; // Importa rotas de Drawer
import Cad from "../screens/Cad"; // Tela de cadastro
import Login from "../screens/Login"; // Tela de login
import EsqueciSenha from "../screens/EsqueciSenha"; // Tela de recuperação de senha
import InfoOnibus from "../screens/infoOnibus"; // Tela de informações do ônibus
import HorarioTela from "../screens/horario"; // Tela de horários
import Linha813 from '../screens/onibus813'; // Linha de ônibus 813
import SearchScreen from '../screens/telapesquisa'; // Tela de pesquisa

// Define os tipos das telas
export type RootStackParamList = {
    login: undefined; // Tela de login
    cadastro: undefined; // Tela de cadastro
    home: undefined; // Tela inicial (Drawer)
    senha: undefined; // Tela de recuperação de senha
    infoOnibus: undefined; // Tela de informações sobre o ônibus
    horario: undefined; // Tela de horários
    onibus813: undefined; // Tela para linha 813
    telapesquisa: undefined; // Tela de pesquisa
};

// Cria o Stack Navigator
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
