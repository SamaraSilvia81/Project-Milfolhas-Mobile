import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Screens 
import Hero from './src/screens/HeroScreen';
import Home from './src/screens/HomeScreen'; // Meal Screen 
import Breakfast from './src/screens/BreakfastScreen';
import Food from './src/screens/FoodScreen';
import Order from './src/screens/OrderScreen';
import Confirm from './src/screens/ConfirmScreen';
import Check from './src/screens/CheckScreen';

const queryClient = new QueryClient();
const Stack = createStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Hero"
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
    </QueryClientProvider>
  );
}

export default App;