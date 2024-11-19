  import React from 'react';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { Feather } from '@expo/vector-icons';
  import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
  import { useNavigation } from '@react-navigation/native';


  import TabRoutes from './tab.routes';
  import Config from '../screens/Config';
  import Atendimento from '../screens/Atendimento';
  import Sobre from '../screens/Sobre';

  const Drawer = createDrawerNavigator();

  function CustomHeader() {
    const navigation = useNavigation();
    return (
      <View style={styles.buttoncentralizar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={24} color="black"/>
        </TouchableOpacity>
      </View>
    );
  }

  export default function DrawerRoutes() {
    return (
      <Drawer.Navigator
        screenOptions={{
          header: () => <CustomHeader />, // Usa o cabeçalho customizado
          drawerInactiveTintColor: 'black',
          drawerActiveTintColor: 'black',
          drawerActiveBackgroundColor: '#f1da7f',
          drawerStyle: {
            backgroundColor: 'white',
          },
        }}
      >
        <Drawer.Screen
          name="principal"
          component={TabRoutes}
          options={{
            drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
            drawerLabel: 'Inicio',
          }}
        />

        <Drawer.Screen
          name="config"
          component={Config}
          options={{
            drawerIcon: ({ color, size }) => <Feather name="settings" color={color} size={size} />,
            drawerLabel: 'Configurações',
          }}
        />

        <Drawer.Screen
          name="atend"
          component={Atendimento}
          options={{
            drawerIcon: ({ color, size }) => <Feather name="message-square" color={color} size={size} />,
            drawerLabel: 'Atendimento',
          }}
        />

        <Drawer.Screen
          name="sobre"
          component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => <Feather name="info" color={color} size={size} />,
            drawerLabel: 'Sobre',
          }}
        />
      </Drawer.Navigator>
    );
  }

  const styles = StyleSheet.create({
    buttoncentralizar: {
      position: 'absolute',
      top: 40,
      left: 20, 
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      width: 60,
      height: 60,     
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
      overflow: 'hidden',     
    },
  });
