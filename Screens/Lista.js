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
import Ionicons from '@expo/vector-icons/Ionicons';

import { COLORS, SPACING, RADIUS, FONT, SHADOW, getGenreStyle } from '../theme';

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
        <Text style={styles.nomeJogo}>{item.nome}</Text>

        <View style={styles.linhaInfo}>
          <Ionicons name="calendar-outline" size={13} color={COLORS.textTertiary} />
          <Text style={styles.ano}>{item.ano}</Text>
        </View>

        <View style={[styles.badge, { backgroundColor: getGenreStyle(item.genero).bg }]}>
          <Ionicons
            name={getGenreStyle(item.genero).icon}
            size={12}
            color={getGenreStyle(item.genero).text}
          />
          <Text style={[styles.badgeTexto, { color: getGenreStyle(item.genero).text }]}>
            {item.genero}
          </Text>
        </View>
      </View>

      <Ionicons name="volume-high-outline" size={20} color={COLORS.textTertiary} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.cabecalho}>
        <Ionicons name="game-controller-outline" size={16} color={COLORS.primaryDark} />
        <Text style={styles.subtitulo}>
          {jogos.length} jogos · toque para ouvir a sinopse
        </Text>
      </View>

      <FlatList
        data={jogos}
        renderItem={criaItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaConteudo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 20,
    paddingHorizontal: SPACING.lg,
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },

  subtitulo: {
    ...FONT.caption,
    color: COLORS.textTertiary,
    marginLeft: SPACING.xs,
  },

  listaConteudo: {
    paddingBottom: SPACING.xxl,
  },

  listaItem: {
    backgroundColor: COLORS.surface,
    marginBottom: SPACING.md,
    padding: SPACING.md,
    borderRadius: RADIUS.lg,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    ...SHADOW.soft,
  },

  listaImagem: {
    width: 56,
    height: 84,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.border,
  },

  listaDetalhes: {
    marginLeft: SPACING.md,
    flex: 1,
    marginRight: SPACING.sm,
  },

  nomeJogo: {
    ...FONT.h3,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },

  linhaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },

  ano: {
    ...FONT.caption,
    color: COLORS.textTertiary,
    marginLeft: 4,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: SPACING.sm,
    borderRadius: RADIUS.pill,
    maxWidth: '100%',
  },

  badgeTexto: {
    ...FONT.tiny,
    marginLeft: 4,
  },
});