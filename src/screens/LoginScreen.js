// LoginScreen.js

// import { Button } from '@rneui/base';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../api/user';

import React, { useState, useEffect } from 'react';
import { View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, TextInput, Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#CF2422', // CF2422 EF7377
    },
  };

  const handleLogin = async () => {
    try {
      const response = await fetchUser(username, password, dispatch);
      console.log(response);

      if (response) {
        navigation.navigate('Hero');
        setUsername('');
        setPassword('');
        setError('');
      }
    } catch (error) {
      console.error(error);
      setError('Seu login ou senha estão incorretos');
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>

        <StatusBar  
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={false}
          networkActivityIndicatorVisible={true}
        />

        <View style={styles.header}>
          <Text variant="displaySmall" style={styles.title}>
            Totem de Atendimento
          </Text>
          <Text variant="titleSmall" style={styles.subtitle}>
            made for fivetechsolutions
          </Text>
        </View>

        <View style={styles.formLogin}>
          <TextInput
            style={styles.input}
            selectionColor="#fff"
            textColor="#fff"
            underlineColor="#fff"
            type="flat"
            label="Nome de Usuário"
            value={username}
            onFocus={() => setError('')}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            selectionColor="#fff"
            textColor="#fff"
            underlineColor="#fff"
            type="flat"
            label="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => setError('')}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleLogin} 
            style={styles.buttonLogin}
          >
            <Button mode="contained" style={styles.buttonLoginText}>Login</Button>
          </TouchableOpacity>
        </View>

        {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}

      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23232a',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginButton: 20,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
  },
  formLogin: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '90%',
    color: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  buttonLogin: {
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: "#CF2422" // #EF7377 - #1BB4C7
  },
  buttonLoginText: {
    fontSize: 16,
    color: '#fff',
  },
  errorText: {
    color: '#EF7377',
    marginTop: 10,
  }
});

export default LoginScreen;