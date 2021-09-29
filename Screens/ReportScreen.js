import React from "react";
import { StyleSheet, Text, View, Image, listView, ImageBackground, TouchableOpacity, Dimensions, Button, TextInput } from 'react-native';
import { GetLocation } from 'react-native-get-location'
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const ReportScreen = ({ navigation }) => {

    const [region, setregion] = React.useState({
        latitude: -29.821965,
        longitude: 30.9427440,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    return (
        <View style={{ marginTop: 50, flex: 1 }}>

            <GooglePlacesAutocomplete
                placeholder='Search Address'
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: "distance"
                }}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details)
                    setregion({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    })
                }}
                query={{
                    key: 'AIzaSyAYrGTovGHuNhkfZ77KFut7vmaw-aDjLw84',
                    language: "en",
                    components: "country:South Africa",
                    radius: 1000,
                    Location: `${region.latitude},${region.longitude}`
                }}
                styles={{
                    container: { flex: 0, position: 'absolute', width: '100%', zIndex: 1 },
                    listView: { backgroundColor: 'white' }
                }}
            />

            <MapView
                style={styles.MapAddress}
                initialRegion={{   //This is somewhere in Westville
                    latitude: -29.821965,
                    longitude: 30.9427440,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{
                    latitude: region.latitude,
                    longitude: region.longitude
                }} />
            </MapView>

            <Text style={styles.TextStyle}>Sicknes</Text>


            <TextInput style={styles.InputSickness}
                placeholder="Input sickeness Name"
                autoCapitalize="words"
                autoCorrect={true}
            >
            </TextInput>




            <TouchableOpacity style={styles.SubmitStyleBtn} ><Text style={styles.buttontext}>Submit</Text></TouchableOpacity>

            <TouchableOpacity style={styles.ShowMapStyleBtn} onPress={() => navigation.navigate("Map")}><Text style={styles.buttontext}>Map</Text></TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },

    MapAddress: {
        position: 'absolute',
        top: 157,
        bottom: 165,
        left: 0,
        right: 0,
    },

    InputSickness: {
        top: 57,
        bottom: 125,
        left: 150,
        right: 0,
    },

    TextStyle: {
        fontSize: 15,
        color: 'black',
        position: 'absolute',
        top: 63,
        bottom: 75,
        left: 10,
        right: 50,
    },

    ShowMapStyleBtn: {
        position: 'absolute',
        top: 520,
        bottom: 65,
        left: 190,
        right: 40,
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 2,
        alignItems: 'center',
    },

    SubmitStyleBtn: {
        position: 'absolute',
        top: 520,
        bottom: 65,
        left: 20,
        right: 210,
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 2,
        alignItems: 'center',
    },

    buttontext: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    }

});

export default ReportScreen;