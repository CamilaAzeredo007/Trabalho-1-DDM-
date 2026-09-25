import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { COLORS, SPACING, RADIUS, FONT, SHADOW, getGenreStyle } from '../theme';

const exemplos = [
  { nome: 'Valorant', genero: 'FPS tático' },
  { nome: 'Dead by Daylight', genero: 'Terror e sobrevivência' },
  { nome: 'Stardew Valley', genero: 'Aventura' },
  { nome: 'The Sims 4', genero: 'Simulação' },
  { nome: 'House Flipper', genero: 'Simulação' },
  { nome: 'Detroit: Become Human', genero: 'Aventura gráfica e drama interativo' },
];

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

        <View style={styles.chips}>
          {exemplos.map((jogo) => {
            const estilo = getGenreStyle(jogo.genero);
            return (
              <View key={jogo.nome} style={[styles.chip, { backgroundColor: estilo.bg }]}>
                <Ionicons name={estilo.icon} size={13} color={estilo.text} />
                <Text style={[styles.chipTexto, { color: estilo.text }]}>{jogo.nome}</Text>
              </View>
            );
          })}
        </View>

      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.xl,
    paddingTop: 24,
  },

  titulo: {
    ...FONT.h1,
    backgroundColor: COLORS.primarySoft,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },

  subtitulo: {
    ...FONT.h2,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },

  texto: {
    ...FONT.body,
    color: COLORS.textSecondary,
    lineHeight: 22,
    marginBottom: SPACING.md,
    textAlign: 'justify',
  },

  caixa: {
    backgroundColor: COLORS.primary,
    padding: SPACING.xl,
    borderRadius: RADIUS.lg,
    marginTop: SPACING.sm,
    ...SHADOW.medium,
  },

  caixaTitulo: {
    ...FONT.h3,
    color: COLORS.white,
    marginBottom: SPACING.md,
  },

  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: SPACING.sm,
    borderRadius: RADIUS.pill,
    marginRight: SPACING.sm,
    marginBottom: SPACING.sm,
  },

  chipTexto: {
    ...FONT.tiny,
    marginLeft: 4,
  },

});