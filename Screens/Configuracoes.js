import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

export default function Configuracoes() {

  const mostrarMensagem = () => {
    Alert.alert(
      'Configurações',
      'As configurações do aplicativo estão funcionando!'
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Configurações
      </Text>

      <Text style={styles.texto}>
        Catálogo de Jogos
      </Text>

      <Text style={styles.descricao}>
        Aplicativo desenvolvido para apresentar
        informações sobre diferentes jogos.
      </Text>

      <View style={styles.areaBotao}>
        <Button
          title="Testar configurações"
          onPress={mostrarMensagem}
          color="#9067b6"
        />
      </View>

      <Text style={styles.versao}>
        Versão 1.0.0
      </Text>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
  },

  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 10,
  },

  descricao: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },

  areaBotao: {
    width: '100%',
    marginBottom: 30
  },

  versao: {
    fontSize: 14,
    color: '#888',
  },

});