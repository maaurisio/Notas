import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const TipsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📚 Consejos de Estudio</Text>

      <View style={styles.tip}>
        <Text style={styles.tipTitle}>1. Planifica tu tiempo</Text>
        <Text style={styles.tipText}>Utiliza una agenda o app para organizar tus tareas y evitar el estrés de última hora.</Text>
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipTitle}>2. Toma descansos</Text>
        <Text style={styles.tipText}>Descansar 5-10 minutos cada hora de estudio mejora la concentración.</Text>
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipTitle}>3. Enseña lo que aprendes</Text>
        <Text style={styles.tipText}>Explicar un tema a otra persona ayuda a reforzar tu comprensión.</Text>
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipTitle}>4. Usa recursos visuales</Text>
        <Text style={styles.tipText}>Diagramas, mapas mentales y videos pueden facilitar el aprendizaje.</Text>
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipTitle}>5. Duerme bien</Text>
        <Text style={styles.tipText}>El descanso adecuado mejora la memoria y el rendimiento cognitivo.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tip: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tipText: {
    fontSize: 16,
    marginTop: 5,
  },
});
