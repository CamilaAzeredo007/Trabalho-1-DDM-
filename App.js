import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import Lista from './Screens/Lista';
import Home from './Screens/Home';
import Configuracoes from './Screens/Configuracoes';
import Perfil from './Screens/Perfil';

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="Home"

        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            if (route.name === 'Home') {

              iconName = focused
                ? 'home'
                : 'home-outline';

            } else if (route.name === 'Lista') {

              iconName = focused
                ? 'list'
                : 'list-outline';

            } else if (route.name === 'Configuracoes') {

              iconName = focused
                ? 'settings'
                : 'settings-outline';

            } else if (route.name === 'Perfil') {

              iconName = focused
                ? 'person'
                : 'person-outline';

            }

            return (

              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />

            );

          },

          tabBarActiveTintColor: '#673ab7',

          tabBarInactiveTintColor: '#555'

        })}
      >

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerShown: false
          }}
        />

        <Tab.Screen
          name="Lista"
          component={Lista}
          options={{
            title: 'Lista'
          }}
        />

        <Tab.Screen
          name="Configuracoes"
          component={Configuracoes}
          options={{
            title: 'Configurações'
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            title: 'Perfil'
          }}
        />

      </Tab.Navigator>

    </NavigationContainer>

  );

}