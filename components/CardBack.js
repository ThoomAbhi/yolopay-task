import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardBack({ name, cvv }) {
  return (
    <View style={styles.card}>
      <Text style={styles.strip} />
      <Text style={styles.text}>Cardholder: {name}</Text>
      <Text style={styles.text}>CVV: {cvv}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 12,
    elevation: 4
  },
  strip: {
    height: 40,
    backgroundColor: '#000',
    marginBottom: 16
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
});
