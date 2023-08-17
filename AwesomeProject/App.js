import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import CommentsScreen from './Screens/CommentsScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen';
import Home from './Screens/Home';
import MapScreen from './Screens/MapScreen';
import ProfileScreen from './Screens/ProfileScreen'
import PostScreen from './Screens/PostScreen';
import { useFonts } from 'expo-font';
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
  });
  return (
   <Provider store={store}>
    {/* <PersistGate persistor={store.persistor}> */}
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='RegistrationScreen'>
      <MainStack.Screen name='Registration' component={RegistrationScreen} />
      <MainStack.Screen name='Login' component={LoginScreen} />
      <MainStack.Screen name='Comments' component={CommentsScreen} />
      <MainStack.Screen name='CreatePost' component={CreatePostsScreen} />
      <MainStack.Screen name='Map' component={MapScreen} />
      <MainStack.Screen name='Profile' component={ProfileScreen} />
      <MainStack.Screen name='PostScreen' component={PostScreen} />
      <MainStack.Screen name='Home' component={Home} />
     {/* <StatusBar style="auto" /> */}
    </MainStack.Navigator>
    </NavigationContainer>
    {/* </PersistGate> */}
    </Provider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
