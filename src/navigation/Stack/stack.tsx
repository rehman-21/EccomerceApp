import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../../screen/SignUp';
import {ROUTES} from '../../constants/routes';
import CreateAccount from '../../screen/CreateAccount';
import Login from '../../screen/Login';
import Splash from '../../screen/Splash';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

export const AuthStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={ROUTES.SPLASH_SCREEN} component={Splash} />
      <Screen name={ROUTES.SIGN_UP} component={SignUp} />
      <Screen name={ROUTES.CREATE_ACCOUNT} component={CreateAccount} />
      <Screen name={ROUTES.LOGIN} component={Login} />
    </Navigator>
  );
};
