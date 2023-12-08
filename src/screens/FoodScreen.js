import React,{useEffect} from "react";

import { ActivityIndicator, View, StatusBar, StyleSheet, FlatList } from "react-native";
import { Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { useQuery } from "@tanstack/react-query";

import { Food } from "../components/Food.js";
import { fetchItemsByListId } from "../api/food";

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

function FoodScren ({route}) {

  const userId = useSelector((state) => state.auth.userId);

  // Extracting additional parameters from route.params
  const { breakfastName, breakfastId } = route.params;

  console.log('BreakfastName:', breakfastName);
  console.log('breakfastId:', breakfastId);

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["AppTotem", userId],
    queryFn: () => fetchItemsByListId(userId, breakfastId),
    onError: (err) => console.error("Erro na query:", err),
    staleTime: 10000,
  });

  console.log('Data FoodScreen:', data);

  const navigation = useNavigation();

  const handleCardPress = (food) => {
    console.log("FOODSCREEN PARA ORDER", food)
    navigation.navigate('Order', { foodId: food.id });
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
        <Text style={styles.pageTitle}>{breakfastName}</Text>
      </View>

      <View style={{ flex: 1 }}>
        {data.find(item => item.id === breakfastId) && (
          <Food food={data.find(item => item.id === breakfastId)} onPress={(food) => handleCardPress(food)} />
        )}
      </View>
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
    left: 190,
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

export default FoodScren;