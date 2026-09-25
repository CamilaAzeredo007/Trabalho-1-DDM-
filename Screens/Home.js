import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';

import Lista from './Lista';
import Extra from './Extra';

import { COLORS, SPACING, RADIUS, FONT, SHADOW } from '../theme';

const Drawer = createDrawerNavigator();

function Inicio({ navigation }) {

  return (

    <View style={styles.container}>

      <View style={styles.iconeBadge}>
        <Ionicons name="game-controller" size={38} color={COLORS.primaryDark} />
      </View>

      <Text style={styles.titulo}>
        Catálogo de Jogos
      </Text>

      <Text style={styles.texto}>
        Bem-vindo ao aplicativo!
      </Text>

      <Text style={styles.texto}>
        Abra o menu lateral para acessar a lista de jogos
        e as informações sobre o tema.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('Lista')}
      >
        <Ionicons name="list" size={18} color={COLORS.white} style={styles.botaoIcone} />
        <Text style={styles.botaoTexto}>Ver lista de jogos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('Extra')}
      >
        <Ionicons name="information-circle-outline" size={18} color={COLORS.primaryDark} style={styles.botaoIcone} />
        <Text style={styles.botaoSecundarioTexto}>Sobre o tema</Text>
      </TouchableOpacity>

    </View>

  );

}

export default function Home() {

  return (

    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{
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
        drawerActiveTintColor: COLORS.primaryDark,
        drawerInactiveTintColor: COLORS.textSecondary,
        drawerActiveBackgroundColor: COLORS.primarySoft,
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        drawerItemStyle: {
          borderRadius: RADIUS.md,
          marginHorizontal: 8,
        },
        drawerStyle: {
          backgroundColor: COLORS.surface,
          width: 250,
        },
      }}
    >

      <Drawer.Screen
        name="Inicio"
        component={Inicio}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Lista"
        component={Lista}
        options={{
          title: 'Lista de Jogos',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Extra"
        component={Extra}
        options={{
          title: 'Informações do Tema',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />

    </Drawer.Navigator>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xxl,
  },

  iconeBadge: {
    width: 84,
    height: 84,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },

  titulo: {
    ...FONT.h1,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },

  texto: {
    ...FONT.body,
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: SPACING.md,
    maxWidth: 300,
  },

  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: RADIUS.pill,
    width: '100%',
    marginTop: SPACING.md,
    ...SHADOW.soft,
  },

  botaoTexto: {
    ...FONT.bodyBold,
    color: COLORS.white,
  },

  botaoSecundario: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primarySoft,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: RADIUS.pill,
    width: '100%',
    marginTop: SPACING.md,
  },

  botaoSecundarioTexto: {
    ...FONT.bodyBold,
    color: COLORS.primaryDark,
  },

  botaoIcone: {
    marginRight: 8,
  },

});
