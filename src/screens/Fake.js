import React from "react";

import { View, StatusBar, StyleSheet } from "react-native";
import { Text, Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

function Fake () {

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      {/* <View style={styles.navbarContainer}>
       
      </View> */}

        <Text style={styles.pageTitle}>Pedido Feito com Sucesso !! </Text>

        <Button
            mode="contained"
            style={styles.fake}
            onPress={() => navigation.navigate('Home')}
        >
        Finalizar
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fcfcfc',
  },
  navbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: 'center',
    width: '100%',
    height: 80,
    backgroundColor: "#C0AA4D"
  },
  pageTitle: {
    fontSize: 30,
    left: 190,
    color: '#00000',
    fontWeight: "bold",
  },
  fake: {
    width: '30%',
    left: 30,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#C0AA4D" // #EF7377
  },
  arrowIconContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
    padding: 5,
    left: 30,
  }
});

export default Fake;