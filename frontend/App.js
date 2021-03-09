// In App.js in a new project
import React, {Component,useEffect} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {AsyncStorage} from '@react-native-community/async-storage';

import AsyncStorage from '@react-native-community/async-storage';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';



import HomeScreen from './src/homescreen';
import DetailScreen from './src/detailscreen';
import Login from './src/login';
import RealLogin from './src/reallogin';
import {Value} from 'react-native-reanimated';

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();





const HomeStackScreen = (navigation) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fdeb93',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
       
      />
    </HomeStack.Navigator>
  );
};

const DetailStackScreen = (navigation) => {
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FE9A08',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <DetailStack.Screen name="Detail" component={DetailScreen} />
    </DetailStack.Navigator>
  );
};

const LoginStackScreen = (navigation) => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FE9A08',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <LoginStack.Screen name="Login" component={Login} options={{title:'Login'}} />
    </LoginStack.Navigator>
  );
 
};

function App() {
  // const [isFirstLanuch, setIsFirstLaunch] = React.useState(null);
  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then((value) => {
  //     if (value == null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   });
  // }, []);

  // if (isFirstLanuch === null) {
  //   return null;
  // } else if (isFirstLanuch === true) {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Detail" component={DetailStackScreen} />
          <Drawer.Screen name="Login" component={LoginStackScreen} />
          <Drawer.Screen name="RealLogin" component={RealLogin} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  // } else{
  //   return <Login/>
  // }
}


export default App;


