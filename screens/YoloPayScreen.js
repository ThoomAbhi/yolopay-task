import faker from 'faker';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardBack from '../components/CardBack';
import CardFront from '../components/CardFront';

export default function YoloPayScreen() {
  const [freezeIndex, setFreezeIndex] = useState(null);

  const cards = Array.from({ length: 10 }).map(() => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    number: faker.finance.creditCardNumber(),
    expiry: faker.date.future().toLocaleDateString('en-GB').slice(0, 5),
    cvv: faker.finance.creditCardCVV()
  }));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>YoloPay Cards</Text>
      {cards.map((card, index) => (
        <TouchableOpacity key={card.id} onPress={() => setFreezeIndex(index === freezeIndex ? null : index)}>
          <View style={styles.cardWrapper}>
            {index === freezeIndex ? (
              <CardBack name={card.name} cvv={card.cvv} />
            ) : (
              <CardFront name={card.name} number={card.number} expiry={card.expiry} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  cardWrapper: { marginBottom: 16 }
});
