import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ROUTES} from '../../constants/routes';
import Home from '../../screen/Home';
import Explore from '../../screen/Explore';
import Notification from '../../screen/Notification';
import Cart from '../../screen/Cart';
import Profile from '../../screen/Profile';

const Tab = createBottomTabNavigator();

export const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case ROUTES.HOME_SCREEN:
              iconName = focused ? 'home' : 'home-outline';
              break;
            case ROUTES.EXPLORE_SCREEN:
              iconName = focused ? 'search' : 'search-outline';
              break;
            case ROUTES.NOTIFICATION_SCREEN:
              iconName = focused ? 'notifications' : 'notifications-outline';
              break;
            case ROUTES.CART_SCREEN:
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case ROUTES.PROFILE_SCREEN:
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {height: 60, paddingBottom: 5},
      })}>
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ROUTES.EXPLORE_SCREEN}
        component={Explore}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATION_SCREEN}
        component={Notification}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ROUTES.CART_SCREEN}
        component={Cart}
        options={{
          headerShown: false,
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'red', color: 'white'},
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE_SCREEN}
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
