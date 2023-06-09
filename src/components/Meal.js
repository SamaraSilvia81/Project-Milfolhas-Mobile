import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

export const Meal = ({ meal, onPress }) => {

  const isDisabled = ['Almoço', 'Jantar', 'Bebidas'].includes(meal.mealname);

  const handlePress = () => {
    if (!isDisabled) {
      onPress(meal);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={isDisabled}>
      <View style={styles.item}>
        <View style={[styles.card, isDisabled && styles.disabledCard]}>
          <Image source={{ uri: meal.image }} style={styles.img} />
          {isDisabled && <View style={styles.overlay} />}
          <View style={styles.textContainer}>
            <Text variant="titleLarge" style={styles.titleItem}>
              {meal.mealname}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
  },
  disabledCard: {
    opacity: 0.6,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  titleItem: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  img: {
    width: '100%',
    height: 210
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});