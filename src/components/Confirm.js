import React, {useState} from 'react';

import { StyleSheet, View, Image} from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export const Confirm = ({ food }) => {

  const [isButtonPressed, setIsButtonPressed] = useState(false);
  
  const navigation = useNavigation();

  console.log("JFÇASBKSJKÇLSKJHHHJ")

  // const handleCardPress = () => {
  //   setIsButtonPressed((prevState) => !prevState);
  //   console.log("BORA PAGARRRRR")
  //   navigation.navigate('Check', {
  //     value: food.value,
  //     quantity: food.quantity,
  //   });
  // };

  const handleCardPress = () => {
    setIsButtonPressed((prevState) => !prevState);
    console.log("BORA PAGARRRRR")
    navigation.navigate('Fake')
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.avatarContainer}>
            <Image
             source={{ uri: food.image }}
              style={{ width:350, height: 250 }}
            />
          </View>
          <View style={styles.detailsOrder}>
            <Text style={styles.quantity}>Quantidade: {food.quantity}</Text>
            <Text style={styles.name}>Prato: {food.foodname}</Text>
          </View>
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}> Preço: R$ {food.value}</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Button
            mode="contained"
            style={styles.confirm}
            onPress={handleCardPress}
          >
            Confirmar Pedido
          </Button>
        </View>
        <View style={styles.actions2}>
          <Button
            mode="contained"
            style={styles.cancel}
            onPress={() => navigation.navigate('Home')}
          >
            Cancelar Pedido
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
    marginTop: 15, //30
  },
  content: {
    alignItems: 'center',
  },
  avatarContainer:{
    marginBottom: 5, //50
  },
  detailsOrder: {
    marginTop: 20,
    // marginBottom: 40,
    textAlign: 'justify'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity:{
    fontSize: 20,
    marginBottom: 20,
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
    fontSize: 16,
    textAlign: 'center',
  },
  lineBottom: {
    position: 'absolute',
    bottom: 0,
    width: 320,
    height: 160,
    backgroundColor: '#23232e',
    zIndex: -1,
  },
  actions: {
    position: 'absolute',
    top: "115%",
    right: -20,
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
  actions2: {
    position: 'absolute',
    top: "115%",
    left: -20,
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
    width: '100%',
    left: 30,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#C0AA4D" // #EF7377
  },
  cancel: {
    width: '100%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A234B', // #2A234B 385993
  }
});