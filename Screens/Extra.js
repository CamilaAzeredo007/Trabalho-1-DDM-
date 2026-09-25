import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Sobre() {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Sobre o tema
      </Text>

      <Text style={styles.subtitulo}>
        Catálogo de Jogos
      </Text>

      <Text style={styles.texto}>
        Os jogos eletrônicos fazem parte do entretenimento
        moderno e apresentam diversos gêneros e estilos,
        como aventura, ação, terror, simulação e jogos
        competitivos.
      </Text>

      <Text style={styles.texto}>
        Este aplicativo foi desenvolvido para apresentar
        informações sobre diferentes jogos de forma simples
        e organizada.
      </Text>

      <Text style={styles.texto}>
        Cada jogo possui informações como nome, ano de
        lançamento, gênero, imagem e uma breve sinopse.
        Também é possível ouvir a sinopse e acessar um
        gameplay através do YouTube.
      </Text>

      <View style={styles.caixa}>

        <Text style={styles.caixaTitulo}>
          Exemplos de jogos
        </Text>

        <Text style={styles.lista}>
          • Valorant{'\n'}
          • Dead by Daylight{'\n'}
          • Stardew Valley{'\n'}
          • The Sims 4{'\n'}
          • House Flipper{'\n'}
          • Detroit: Become Human
        </Text>

      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    backgroundColor: '#b99ed3',
    borderRadius: 15,
    marginTop: 25, 
    padding: 15,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 25,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 15,
  },

  texto: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 15,
    textAlign: 'justify',
  },

  caixa: {
    backgroundColor: '#9067b6',
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
  },

  caixaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  lista: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 25,
  },

});