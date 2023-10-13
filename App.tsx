import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './navigations/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { MenuProvider } from 'react-native-popup-menu';
import 'react-native-gesture-handler';
import { NativeWindStyleSheet } from 'nativewind';
import React from 'react';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
      <SafeAreaProvider>
        <MenuProvider>
        <RootNavigator/>
        <StatusBar/>
        </MenuProvider>
      </SafeAreaProvider> 
  );
}
