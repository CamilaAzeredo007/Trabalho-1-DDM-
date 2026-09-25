import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { COLORS, SPACING, RADIUS, FONT, SHADOW } from '../theme';

export default function Perfil() {
  return (
    <View style={styles.container}>

      <View style={styles.avatarAnel}>
        <Image
          source={require('../assets/eu.jpg')}
          style={styles.perfil}
        />
      </View>

      <Text style={styles.nome}>
        Camila Amaro de Azeredo
      </Text>

      <View style={styles.infoLinha}>
        <Ionicons name="card-outline" size={15} color={COLORS.textTertiary} />
        <Text style={styles.info}>RA: 20241BG.INF_I0007</Text>
      </View>

      <View style={styles.infoLinha}>
        <Ionicons name="book-outline" size={15} color={COLORS.textTertiary} />
        <Text style={styles.info}>Disciplina: Desenvolvimento de Aplicativos</Text>
      </View>

      <View style={styles.sobre}>

        <View style={styles.sobreTituloLinha}>
          <Ionicons name="game-controller-outline" size={18} color={COLORS.secondaryDark} />
          <Text style={styles.sobreTitulo}>
            Sobre o aplicativo
          </Text>
        </View>

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
    backgroundColor: COLORS.background,
    paddingTop: 24,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },

  avatarAnel: {
    width: 138,
    height: 138,
    borderRadius: 69,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
    borderWidth: 3,
    borderColor: COLORS.primarySoft,
    backgroundColor: COLORS.surface,
    ...SHADOW.medium,
  },

  perfil: {
    width: 126,
    height: 126,
    borderRadius: 63,
  },

  nome: {
    ...FONT.h2,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },

  infoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },

  info: {
    ...FONT.caption,
    color: COLORS.textSecondary,
    marginLeft: 6,
    textAlign: 'center',
  },

  sobre: {
    width: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: RADIUS.lg,
    padding: SPACING.xl,
    marginTop: SPACING.xl,
    ...SHADOW.soft,
  },

  sobreTituloLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },

  sobreTitulo: {
    ...FONT.h3,
    color: COLORS.textPrimary,
    marginLeft: 6,
    textAlign: 'center',
  },

  descricao: {
    ...FONT.body,
    fontSize: 14,
    color: COLORS.textPrimary,
    lineHeight: 21,
    textAlign: 'justify',
  },
});