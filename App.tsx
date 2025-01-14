import {SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Navigations} from './src/navigation';

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{backgroundColor: '#F6F7F2', flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="#F6F7F2" />
        <Navigations />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
