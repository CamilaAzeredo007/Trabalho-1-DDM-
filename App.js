import React from 'react';

import { View, Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import Lista from './Screens/Lista';
import Home from './Screens/Home';
import Configuracoes from './Screens/Configuracoes';
import Perfil from './Screens/Perfil';

import { COLORS, RADIUS, SHADOW } from './theme';

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="Home"

        screenOptions={({ route }) => ({

          headerStyle: {
            backgroundColor: COLORS.background,
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth: 0,
          },

          headerTitleStyle: {
            color: COLORS.textPrimary,
            fontWeight: '700',
            fontSize: 18,
          },

          headerTintColor: COLORS.primaryDark,
          headerTitleAlign: 'center',

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

              <View
                style={{
                  width: 42,
                  height: 30,
                  borderRadius: RADIUS.pill,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: focused ? COLORS.primarySoft : 'transparent',
                }}
              >
                <Ionicons
                  name={iconName}
                  size={size - 3}
                  color={color}
                />
              </View>

            );

          },

          tabBarActiveTintColor: COLORS.primaryDark,

          tabBarInactiveTintColor: COLORS.textTertiary,

          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },

          tabBarStyle: {
            backgroundColor: COLORS.surface,
            borderTopWidth: 0,
            height: Platform.OS === 'ios' ? 88 : 66,
            paddingTop: 8,
            paddingBottom: Platform.OS === 'ios' ? 28 : 10,
            ...SHADOW.medium,
          },

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
