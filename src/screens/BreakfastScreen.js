import React from "react";

import { ActivityIndicator, View, StatusBar, StyleSheet, FlatList } from "react-native";
import { Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { useQuery } from "@tanstack/react-query";

import { Breakfast } from "../components/Breakfast.js";
import { fetchItemsByListId } from "../api/food";

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

function BreakfastScreen ({route}) {

  const navigation = useNavigation();
  const userId = useSelector((state) => state.auth.userId);

  // Extracting additional parameters from route.params
  const { mealName, listId } = route.params;

  console.log("BREAKFASTSCREEN")
  console.log('1. MealName:', mealName);
  console.log('2. UserId from route:', userId);
  console.log('3. ListId:', listId);

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["AppTotem", userId],
    queryFn: () => fetchItemsByListId(userId,listId),
    onError: (err) => console.error("Erro na query:", err),
  });

  // console.log("Comidas",data)

  const handleCardPress = (breakfast) => {
    
    console.log("Comida do café da manhã pressionado: ", breakfast);
    console.log("Nome da comida do café: ", breakfast.name);
    console.log("ID da comida do café: ", breakfast.id);
  
    navigation.navigate('Food', {
      breakfastName: breakfast.name,
      breakfastId: breakfast.id,
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFetching && <Text>IS FETCHING</Text>}

      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <View style={styles.navbarContainer}>
        <Icon
          name="arrow-back"
          size={25}
          color="#fff"
          style={styles.arrowIconContainer}
          onPress={handleGoBack}
        />
        <Text style={styles.pageTitle}>{mealName}</Text>
      </View>

        <FlatList
          style={{ flex: 1 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            console.log("Food Item:", item); // Add this line to log each food item
            return <Breakfast breakfast={item} onPress={handleCardPress} />;
          }}
        />
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
    fontSize: 18,
    left: 180,
    color: '#fff',
    fontWeight: "bold",
  },
  arrowIconContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
    padding: 5,
    left: 30,
  }
});

export default BreakfastScreen;