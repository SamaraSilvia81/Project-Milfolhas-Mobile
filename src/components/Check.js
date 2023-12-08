import React from 'react';

import { StyleSheet, View} from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export const Check = ({ price, quantity }) => {

  const navigation = useNavigation();
  const priceConverted = parseFloat(price);

  console.log("BORA CHECKKKKKKK");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.detailsOrder}>
            <Text style={styles.name} variant="displaySmall">Informe seu nome</Text>
            <Text style={styles.span} variant="headlineLarge">Samara Silvia</Text>
          </View>
          <View style={styles.tagContainer}>
            <Text style={styles.tagText} variant="headlineSmall"> Preço: R$ {priceConverted * quantity}</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Button
            mode="contained"
            style={styles.confirm}
            onPress={() => navigation.navigate('Home')}
          >
            Finalizar Pedido
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
  card:{
    marginTop: 30,
  },
  content: {
    alignItems: 'center',
  },
  detailsOrder: {
    marginBottom: 50,
    alignItems: 'center',
    textAlign: 'center'
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  span: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 5,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2', // F2F2F2 - 23232e
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 5,
  },
  tagText: {
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
  actions: {
    position: 'absolute',
    top: "180%",
    left: 100,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },  
  confirm: {
    width: '120%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#C0AA4D" // #EF7377
  }
});