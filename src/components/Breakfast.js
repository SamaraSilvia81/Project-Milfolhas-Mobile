import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

export const Breakfast = ({ breakfast, onPress }) => {

  console.log("breakfast", breakfast);

  return (
    <TouchableOpacity onPress={() => onPress(breakfast)}>
      <View style={styles.item}>
        <View style={styles.card}>
          <Image source={{ uri: breakfast.image }} style={styles.img} />
          <View style={styles.textContainer}>
            <Text variant="titleLarge" style={styles.titleItem}>{breakfast.name}</Text>
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
    position: 'relative',
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Definindo cor de fundo com opacidade
  },
  titleItem: {
    marginBottom: 10,
    textAlign: 'center', // Centralizar o texto
    color: '#00000', // Definir cor do texto como branco
  },
  img: {
    width: 250,
    height: 210,
  },
  textContainer: {
    position: 'absolute',
    top: 0, // Ajuste a posição vertical conforme necessário
    left: 0, // Ajuste a posição horizontal conforme necessário
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});