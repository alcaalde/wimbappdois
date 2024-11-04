import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { StyleSheet} from 'react-native';

import TabRoutes from './tab.routes';
import Config from '../screens/Config';
import Atendimento from '../screens/Atendimento';
import Sobre from '../screens/Sobre';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
      <Drawer.Navigator screenOptions={{
      title:'', 
      drawerInactiveTintColor: 'black',
      drawerActiveTintColor: 'black', 
      drawerActiveBackgroundColor: '#f1da7f',
      drawerStyle: {
        backgroundColor: 'white',
      }}}>
        <Drawer.Screen 
        name="principal" 
        component={TabRoutes}
        options={{
            drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>,
            drawerLabel: 'Inicio'
        }}
        />

         <Drawer.Screen 
        name="config" 
        component={Config}
        options={{
            drawerIcon: ({color, size}) => <Feather name="settings" color={color} size={size}/>,
            drawerLabel: 'Configurações'
        }}
        />
        
        <Drawer.Screen 
        name="atend" 
        component={Atendimento}
        options={{
            drawerIcon: ({color, size}) => <Feather name="message-square" color={color} size={size}/>,
            drawerLabel: 'Atendimento'
        }}
        />

        <Drawer.Screen 
        name="sobre" 
        component={Sobre}
        options={{
            drawerIcon: ({color, size}) => <Feather name="info" color={color} size={size}/>,
            drawerLabel: 'Sobre'
        }}
        />

      </Drawer.Navigator>
    );
  }

  const styles = StyleSheet.create({
    
  });