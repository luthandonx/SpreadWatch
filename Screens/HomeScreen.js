import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image  , ImageBackground , TouchableOpacity , Button} from 'react-native';

const people_image = require("./PeopleWithMask.jpeg")

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
      <ImageBackground source = {people_image }  
        style = {styles.image}> 
      <Text style = {styles.text}>SpreadWatch</Text>

      <TouchableOpacity style = {styles.buttonstyleMap} onPress ={ () => navigation.navigate("Map")}><Text style ={styles.buttontext}>Show Map</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.buttonstyleReport} onPress={ () => navigation.navigate("Report")}  ><Text style ={styles.buttontext}>Report</Text></TouchableOpacity>
     
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      flex:1,
      justifyContent: "center",
      width:'100%',
      height:'100%',
    },
    text:{
      position:'absolute',
      top: 50,
      bottom: 0,
      left: 90,
      right: 0,
      fontSize:30,
      fontWeight: "bold",
      color:'black',
    },
  
    buttonstyleReport: {
      position:'absolute',
      top: 570,
      bottom: 65,
      left: 50,
      right: 50,
      backgroundColor : 'black',
      padding : 20,
      borderRadius: 2,
      alignItems: 'center',
    },
  
    buttonstyleMap: {
      position:'absolute',
      top: 500,
      bottom: 135,
      left: 50,
      right: 50,
      backgroundColor : 'green',
      padding : 20,
      borderRadius: 2,
      alignItems: 'center',
    },
  
  
    buttontext: {
      fontSize : 20,
      color: 'white',
      fontWeight: "bold",
    }
  });

  export default HomeScreen;