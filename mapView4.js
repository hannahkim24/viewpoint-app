import * as React from 'react';
import { useState } from 'react';
import { Animated, Image, Pressable, Text, View, StyleSheet, Button, } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { StatusBar } from 'react-native'

import mapNav2 from './images/mapNav2.png';
import marker from './icons/marker.png';
import continueNav from './icons/continue-nav.png';
import logo from './icons/logo1.png';

import { Marker, Polyline } from 'react-native-maps';

export default function MapThree({ navigation }) {
  const [mapRegion, setmapRegion] = useState({
    latitude: 	37.424157,
    longitude: -122.1697,
    latitudeDelta: 0.03, 
    longitudeDelta: 0.03,
    
  });

  const [coordinates] = useState([
    {
      latitude: 37.422020,
      longitude: -122.154984,
    },
    {
      latitude: 37.426430,
      longitude: -122.164400,
    },

    

  ]);
  return (
    
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false}  translucent = {true}/>
      
      <View style={styles.navigation}>
        <Text style={styles.homeScreenText}> </Text>
        <Text style={styles.homeScreenText}> </Text>
        <Text style={styles.homeScreenText}> </Text>
        <View  style = {styles.directions}>
        
        <Image style={styles.mapNav} source={mapNav2} />
        </View>
    
      </View>
      
     
      <MapView
        style={{ alignSelf: 'stretch', height: '80%' }}
        initialRegion={{
          latitude:  37.4252226,
          longitude: -122.1585277,
          latitudeDelta: 0.01, 
          longitudeDelta: 0.015,
        }}>
        <Marker coordinate={coordinates[0]} image={marker}/>
        <Marker coordinate={coordinates[1]} image={marker}/>
        <Marker coordinate={{latitude: 37.424430, longitude: -122.161400}} image={logo} />
        <Marker coordinate={{latitude: 37.426430, longitude: -122.162400}} image={logo} />
        <Marker coordinate={{latitude: 37.423430, longitude: -122.156000}} image={logo} />
       
        <Polyline
          coordinates={coordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#FF8F00']}
          strokeWidth={6}
        />
      </MapView>
      <View style={styles.footer}>
      <Image style={styles.startNav} source={continueNav} />
      <Pressable  style={styles.endNav} onPress={() => navigation.navigate('Home')}  >
        <Text style={{color: 'white', fontSize: 16}}>  End Route </Text>
      </Pressable>
      <Pressable  style={styles.continueNav} onPress={() => navigation.navigate('Location2Arrival')}  >
        <Text style={{color: 'white', fontSize: 16}}>  Continue </Text>
      </Pressable>
      
     
      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  homeScreenText: {
    fontSize: 32,
    lineHeight: 80
  },
  mapNav: {
    width: 400,
    height: 195
  },
  startNav: {
   
    width: 400,
    height: 80
  },

  footer: {
    position: 'absolute',
    bottom: 0
  },

  directions: {
    position: 'absolute',
    top: 45,
    left:-195
  },
  endNav: {
    position: 'absolute',
    bottom: 25,
    left: 171,
    padding: 8,
    backgroundColor: '#FF5252',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF5252',
    overflow: 'hidden' , 
  },

  continueNav: {
    position: 'absolute',
    bottom: 25,
    left: 284,
    padding: 8,
    backgroundColor: '#FF8F00',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF8F00',
    overflow: 'hidden' , 
  }

  

 



  

});