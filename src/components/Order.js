import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const Order = ({ food }) => {
  
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [counter, setCounter] = useState(0);
  const navigation = useNavigation();

  const handleCardPress = () => {
    setIsButtonPressed((prevState) => !prevState);

    const selectedFood = {
      objectId: food.objectId,
      foodname: food.foodname,
      price: food.price,
      image: food.image,
      quantity: counter,
    };

    navigation.navigate('Confirm', { selectedFood });
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.avatarContainer}>
            <Avatar.Image source={{ uri: food.image }} size={220} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{food.foodname}</Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>Ingredientes</Text>
              <Text style={styles.description}>{food.about}</Text>
            </View>
          </View>
          <View style={styles.tagContainer}>
            <View style={styles.tagItem}>
              <Text style={styles.tagText}>Preço: R${food.price}</Text>
            </View>
          </View>
        </View>
        <View style={styles.order}>
          <Text style={styles.text}>Quantidade do Pedido</Text>
          <View style={styles.quantity}>
            <Button style={styles.minus} mode="contained" onPress={decrement}>
              -
            </Button>
            <Text style={styles.result}>{counter}</Text>
            <Button style={styles.push} mode="contained" onPress={increment}>
              +
            </Button>
          </View>
        </View>
        <View style={styles.actions}>
          <Button
            mode="contained"
            style={[styles.button, isButtonPressed && styles.buttonPressed]}
            onPress={handleCardPress}
          >
            <Icon
              name={isButtonPressed ? 'remove' : 'shopping-cart'}
              size={20}
              color="white"
            />
          </Button>
        </View>
      </View>
      <View style={styles.lineBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginTop: 30,
  },
  content: {
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'absolute',
    top: -90,
    right: '60%',
    alignItems: 'center',
  },
  detailsContainer: {
    marginTop: 120,
    width: '100%',
    textAlign: 'justify',
  },
  nameContainer: {
    position: 'absolute',
    top: -120,
    left: '60%',
    width: '50%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  nickname: {
    fontSize: 16,
    textAlign: 'justify',
  },
  descriptionContainer: {
    marginVertical: 50,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'justify',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tagItem: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 5,
  },
  tagText: {
    fontSize: 16,
    textAlign: 'center',
  },
  lineBottom: {
    position: 'absolute',
    bottom: 0,
    width: '120%',
    height: 160,
    backgroundColor: '#23232e',
    zIndex: -1,
  },
  order: {
    position: 'absolute',
    top: '116%',
  },
  quantity: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  push: {
    backgroundColor: 'transparent',
  },
  minus: {
    backgroundColor: 'transparent',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 15,
  },
  result: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    marginHorizontal: 10,
  },
  actions: {
    position: 'absolute',
    top: '100%',
    right: -50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    width: 80,
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0AA4D',
  },
  buttonPressed: {
    backgroundColor: '#2A234B',
  },
});