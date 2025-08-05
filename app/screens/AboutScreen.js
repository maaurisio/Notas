import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de la App</Text>
      <Text style={styles.text}>
        Esta aplicación fue desarrollada para gestionar calificaciones de estudiantes.
      </Text>
      <Text style={styles.text}>
        Versión: 1.0.0
      </Text>
      <Text style={styles.text}>
        Autor: Mauricio Mrla
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
