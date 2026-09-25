import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { COLORS, SPACING, RADIUS, FONT, SHADOW } from '../theme';

export default function Configuracoes() {

  const mostrarMensagem = () => {
    Alert.alert(
      'Configurações',
      'As configurações do aplicativo estão funcionando!'
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.iconeBadge}>
        <Ionicons name="settings-outline" size={34} color={COLORS.primaryDark} />
      </View>

      <Text style={styles.texto}>
        Catálogo de Jogos
      </Text>

      <Text style={styles.descricao}>
        Aplicativo desenvolvido para apresentar
        informações sobre diferentes jogos.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.85}
        onPress={mostrarMensagem}
      >
        <Ionicons name="checkmark-circle-outline" size={18} color={COLORS.white} style={styles.botaoIcone} />
        <Text style={styles.botaoTexto}>Testar configurações</Text>
      </TouchableOpacity>

      <View style={styles.versaoPill}>
        <Text style={styles.versao}>
          Versão 1.0.0
        </Text>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },

  iconeBadge: {
    width: 72,
    height: 72,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },

  texto: {
    ...FONT.h2,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },

  descricao: {
    ...FONT.body,
    color: COLORS.textTertiary,
    textAlign: 'center',
    marginBottom: SPACING.xl,
    maxWidth: 280,
  },

  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: RADIUS.pill,
    marginBottom: SPACING.xxl,
    ...SHADOW.soft,
  },

  botaoTexto: {
    ...FONT.bodyBold,
    color: COLORS.white,
  },

  botaoIcone: {
    marginRight: 8,
  },

  versaoPill: {
    paddingVertical: 6,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.surface,
    ...SHADOW.soft,
  },

  versao: {
    ...FONT.tiny,
    color: COLORS.textTertiary,
  },

});