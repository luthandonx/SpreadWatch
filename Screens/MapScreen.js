import React , {Component} from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, _Text} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';


const MapScreen = () => {

  // Setting up a defualt state
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      }
      catch(error){
          alert("enable Location Services")
      }
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      
    
      <MapView style={styles.map}
        initialRegion = {{   //This is somewhere in Westville
        latitude: -29.821965,
        longitude: 30.9427440,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}

        provider = "google"

      >
        <Marker  coordinate = {{latitude: -29.821965,
        longitude: 30.9427440}}>
          <Callout >
            <Text> Influenza </Text>
          </Callout>
        </Marker>
          <Circle center = {{latitude: -29.821965,longitude: 30.9427440}} radius = {10000} fillColor = {'red'}/>  
          <Circle center = {{latitude: -29.821965,longitude: 30.007440}} radius = {10000} fillColor = {'blue'}/>
          <Circle center = {{latitude: -28.821965,longitude: 29.9427440}} radius = {10000} fillColor = {'yellow'}/>
          <Circle center = {{latitude: -28.821965,longitude: 31.9427440}} radius = {10000} fillColor = {'purple'}/>   
          
          <Marker  coordinate = {{latitude: -28.821965,longitude: 31.9427440}}>
          <Callout >
            <Text> Covid-19</Text>
          </Callout>
        </Marker>

        <Marker  coordinate = {{latitude: -28.821965,longitude: 29.9427440}}>
          <Callout >
            <Text> Norovirus ("Stomach Flu") </Text>
          </Callout>
        </Marker>

        <Marker  coordinate = {{latitude: -29.821965,longitude: 30.007440}}>
          <Callout >
            <Text> Pertusis ("whooping cough")</Text>
          </Callout>
        </Marker>
      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

});

export default MapScreen ;
