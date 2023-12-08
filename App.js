import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/redux';

// Screens 
import Login from './src/screens/LoginScreen';
import Hero from './src/screens/HeroScreen';
import Home from './src/screens/HomeScreen'; // Meal Screen 
import Breakfast from './src/screens/BreakfastScreen';
import Food from './src/screens/FoodScreen';
import Order from './src/screens/OrderScreen';
import Confirm from './src/screens/ConfirmScreen';
import Check from './src/screens/CheckScreen';
import Fake from './src/screens/Fake';

const queryClient = new QueryClient();
const store = configureStore({ reducer: rootReducer });
const Stack = createStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <Provider store={store}>
          <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                  headerStyle: {
                    backgroundColor: '#ffffff',
                  },
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                  headerLeftContainerStyle: {
                      paddingLeft: 20,
                    },
                }}>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Hero"
                component={Hero}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Breakfast"
                component={Breakfast}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Fake"
                component={Fake}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Food"
                component={Food}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Order"
                component={Order}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Confirm"
                component={Confirm}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Check"
                component={Check}
                options={{ headerShown: false }}
              />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </Provider>
    </QueryClientProvider>
  );
}

export default App;