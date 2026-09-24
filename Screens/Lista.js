import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from 'react-native';
import * as Speech from 'expo-speech';

const jogos = [
  {
    id: 1,
    nome: 'Valorant',
    ano: 2020,
    genero: 'FPS tático',
    imagem: require('../assets/valorant.webp'),
    sinopse:
      "A história se passa em um futuro próximo na Terra, após um evento cataclísmico global conhecido como 'Primeira Luz'...",
    url: 'https://www.youtube.com/watch?v=EgG6LNxKT0U',
  },
  {
    id: 2,
    nome: 'Dead by Daylight',
    ano: 2016,
    genero: 'Terror e sobrevivência',
    imagem: require('../assets/dbd.jpg'),
    sinopse:
      'A Entidade viaja através do multiverso sequestrando pessoas (os Sobreviventes) e monstros ou psicopatas (os Assassinos)...',
    url: 'https://www.youtube.com/watch?v=Wlakwh_D-vs',
  },
  {
    id: 3,
    nome: 'Stardew Valley',
    ano: 2016,
    genero: 'Aventura',
    imagem: require('../assets/stardew.jpg'),
    sinopse:
      'Em Stardew Valley, você assume o papel de um funcionário cansado da rotina exaustiva de escritório na megacorporação Corporação Joja...',
    url: 'https://www.youtube.com/watch?v=dNqAugvMRQA',
  },
  {
    id: 4,
    nome: 'The Sims 4',
    ano: 2014,
    genero: 'Simulação',
    imagem: require('../assets/thesims.jpg'),
    sinopse:
      'The Sims 4 é o jogo de simulação de vida que lhe dá o poder de criar e controlar pessoas. Crie Sims novos...',
    url: 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
  },
  {
    id: 5,
    nome: 'House Flipper',
    ano: 2018,
    genero: 'Simulação',
    imagem: require('../assets/houseflipper.jpg'),
    sinopse:
      'House Flipper é uma chance única de você se tornar uma equipe de reformas de uma pessoa só. Compre...',
    url: 'https://www.youtube.com/watch?v=RtYMw7Fl4EA',
  },
  {
    id: 6,
    nome: 'Detroit: Become Human',
    ano: 2018,
    genero: 'Aventura gráfica e drama interativo',
    imagem: require('../assets/detroit.jpg'),
    sinopse:
      'Detroit: Become Human se passa em uma Detroit futurista no ano de 2038, onde a sociedade foi completamente...',
    url: 'https://www.youtube.com/watch?v=IdAGcNzzknc',
  },
];

export default function Lista() {
  const criaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listaItem}
      onPress={() => {
        Speech.stop();

        Speech.speak(`${item.nome}. ${item.sinopse}`, {
          language: 'pt-BR',
          pitch: 1.7,
          rate: 1.7,
        });

        Alert.alert(
          'Sinopse',
          item.sinopse,
          [
            {
              text: 'Assistir gameplay',
              onPress: () => Linking.openURL(item.url),
            },
            {
              text: 'Fechar',
              style: 'cancel',
            },
          ]
        );
      }}
    >
      <Image source={item.imagem} style={styles.listaImagem} />

      <View style={styles.listaDetalhes}>
        <Text style={styles.textoForte}>
          Nome:
          <Text style={styles.textoNormal}> {item.nome}</Text>
        </Text>

        <Text style={styles.textoForte}>
          Ano:
          <Text style={styles.textoNormal}> {item.ano}</Text>
        </Text>

        <Text style={styles.textoForte}>
          Gênero:
          <Text style={styles.textoNormal}> {item.genero}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>Catálogo de Jogos</Text>

      <FlatList
        data={jogos}
        renderItem={criaItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },

  listaItem: {
    backgroundColor: '#d8e4ed',
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  listaImagem: {
    width: 60,
    height: 90,
    borderRadius: 8,
  },

  listaDetalhes: {
    marginLeft: 15,
    flex: 1,
  },

  textoForte: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#222',
  },

  textoNormal: {
    fontWeight: 'normal',
    color: '#444',
  },
});