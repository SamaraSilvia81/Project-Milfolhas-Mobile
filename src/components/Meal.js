// Meal.js
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

function Meal({ meal, onPress }) {
  const handlePress = () => {
    onPress(meal);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text variant="titleLarge" style={styles.titleItem}>
            {meal.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: 150,
    height: 150, // Tornando o card um quadrado
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleItem: {
    textAlign: 'center',
    color: '#fff',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Meal;