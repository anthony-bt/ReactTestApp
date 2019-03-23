/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen } from "./src/screens/LoginScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { DetailsScreen } from "./src/screens/DetailScreen";


const styles = StyleSheet.create({
  icon: {
    width: 46,
    height: 46,
  },
});

const DrawerStack = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
}, {
  initialRouteName: 'Home',
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#f4511e'},
    title: 'MyFirstApp',
    headerTintColor: 'white',
    headerLeft: <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Image source={require('./src/assets/header-menu.png')}
                         style={[styles.icon]} />
                </TouchableOpacity>,
  }),
  contentOptions: {
    activeTintColor: '#e91e63',
  },
})

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
})

const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  drawerStack: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'Login'
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}