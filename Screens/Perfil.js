import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Perfil</Text>

      <Image
        source={require('../assets/eu.jpg')}
        style={styles.perfil}
      />

      <Text style={styles.nome}>
        Camila Amaro de Azeredo
      </Text>

      <Text style={styles.info}>
        RA: 20241BG.INF_I0007
      </Text>

      <Text style={styles.info}>
        Disciplina: Desenvolvimento de Aplicativos
      </Text>

      <View style={styles.sobre}>

        <Text style={styles.sobreTitulo}>
          Sobre o aplicativo
        </Text>

        <Text style={styles.descricao}>
          Este aplicativo foi desenvolvido com o tema de
          catálogo de jogos. O objetivo é apresentar
          informações sobre diferentes jogos, como nome,
          ano de lançamento, gênero e uma breve sinopse.
          {'\n\n'}
          O aplicativo também possui recursos de narração
          das sinopses e acesso aos gameplays dos jogos,
          utilizando componentes e recursos do React Native.
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
  },

  perfil: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },

  info: {
    fontSize: 15,
    color: '#555',
    marginBottom: 6,
    textAlign: 'center',
  },

  sobre: {
    width: '100%',
    backgroundColor: '#d8e4ed',
    borderRadius: 15,
    padding: 20,
    marginTop: 25,
  },

  sobreTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
    textAlign: 'center',
  },

  descricao: {
    fontSize: 14,
    color: '#444',
    lineHeight: 21,
    textAlign: 'justify',
  },
});