import React from "react";

import { View, ActivityIndicator, Image, StatusBar, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useQuery } from "@tanstack/react-query";
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Order } from "../components/Order";
import { fetchItemsByListId } from "../api/food";

function OrderScreen ({ route }) {

  const userId = useSelector((state) => state.auth.userId);
  
  const { foodId } = route.params;

  console.log("ORDEER FODD:", foodId)

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["AppTotem", userId],
    queryFn: () => fetchItemsByListId(userId, foodId),
    onError: (err) => console.error("Erro na query:", err),
    staleTime: 10000,
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text>Loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  // const selectedfood = data.find((food) => food.objectId === foodId);

  // if (!selectedfood) {
  //   return (
  //     <View style={styles.errorContainer}>
  //       <Text>No food found</Text>
  //     </View>
  //   );
  // }

  return (

    <View style={styles.container}>

      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <View style={styles.arrowIconContainer}>
        <Icon
          name="arrow-back"
          size={25}
          color="#000"
          onPress={handleGoBack}
        />
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={require('../../public/logo.png')}
          style={{ width: 120, height: 120 }}
        />
      </View>

      <View style={{ flex: 1 }}>
        {data.find(item => item.id === foodId) && (
          <Order food={data.find(item => item.id === foodId)}/>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcfcfc",
  },
  avatarContainer: {
    position: 'absolute',
    top: 5,
    right: 30,
    borderColor: 'transparent',
  },
  arrowIconContainer: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 100,
    padding: 5,
    top: 30,
    left: 30,
    zIndex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OrderScreen;