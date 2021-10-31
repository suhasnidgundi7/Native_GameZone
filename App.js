import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import Navigator from './Routes/HomeStack'

export default function App() {

  const [loaded] = Font.useFonts({
    nunito_regular: require('./assets/Fonts/Nunito-Regular.ttf'),
    nunito_bold: require('./assets/Fonts/Nunito-Bold.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Navigator/>
      <StatusBar style='auto' />
    </>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
