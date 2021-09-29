import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image  , ImageBackground , TouchableOpacity , Button} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import NavScreens from "./Screens/NavigateScreens.js";

export default function App() {
    
  return (
    <View style = {styles.container}> 
        < NavScreens />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
