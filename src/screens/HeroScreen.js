import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';

function HeroScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle = "dark-content"
        hidden = {false}
        backgroundColor = "transparent"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      <Image
        source={require('../../public/logo.png')}
        style={{ width: 350, height: 350 }}
      />
      <View style={styles.actions}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          Iniciar
        </Button>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    width: '100%',
    paddingHorizontal: 30,
    backgroundColor: "#BEAD64" // #EF7377
  }
};

export default HeroScreen;