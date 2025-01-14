import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

export const AppStack = () => {
  return <Navigator screenOptions={{headerShown: false}}></Navigator>;
};
