import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardFront({ name, number, expiry }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>💳 YOLO PAY</Text>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.label}>Exp: {expiry}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4e4cb8',
    padding: 20,
    borderRadius: 12,
    elevation: 4
  },
  title: { color: '#fff', fontSize: 18, marginBottom: 12 },
  number: { color: '#fff', fontSize: 22, letterSpacing: 2, marginBottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { color: '#fff' }
});
