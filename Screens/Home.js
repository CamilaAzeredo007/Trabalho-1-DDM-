import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Lista from './Lista';
import Extra from './Extra';

const Drawer = createDrawerNavigator();

function Inicio() {

  return (

    <View style={styles.container}>

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

    </View>

  );

}

export default function Home() {

  return (

    <Drawer.Navigator
      initialRouteName="Inicio"
    >

      <Drawer.Screen
        name="Inicio"
        component={Inicio}
        options={{
          title: 'Home'
        }}
      />

      <Drawer.Screen
        name="Lista"
        component={Lista}
        options={{
          title: 'Lista de Jogos'
        }}
      />

      <Drawer.Screen
        name="Extra"
        component={Extra}
        options={{
          title: 'Informações do Tema'
        }}
      />

    </Drawer.Navigator>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15
  }

});