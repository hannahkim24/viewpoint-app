import * as React from 'react';
import { useState } from 'react';
import MapView from 'react-native-maps';
import { StatusBar } from 'react-native'

import { Animated, Image, Pressable, Text, View, StyleSheet, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HelpVideo from './HelpVideo.js';
import MapStart from './mapView.js';
import MapLoc1 from './mapView3.js';
import MapLoc2 from './mapView4.js';
import MapEnd from './mapViewEnd.js';
import mapNav from './images/mapNav.png';
import question from './icons/question.png';



export default function Home({ navigation }) {
  const [mapRegion, setmapRegion] = useState({
    latitude: 	37.424157,
    longitude: -122.1697,
    latitudeDelta: 0.03, 
    longitudeDelta: 0.03,
    
  });
  return (
    
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false}  translucent = {true}/>
      
      <View style={styles.navigation}>
        <Text style={styles.homeScreenText}> </Text>
        <Text style={styles.homeScreenText}> </Text>
      <Pressable onPress={() => navigation.navigate('MapStart')}  >
        
        <Image style={styles.mapNav} source={mapNav} />
      
      </Pressable> 

      
      </View>
      
      <MapView
        style={{ alignSelf: 'stretch', height: '90%'}}
        region={mapRegion}
      />
 <View style={styles.footer}>
       
       <Pressable  onPress={() => navigation.navigate('HelpVideo')}  >
         
         <Image style={styles.questionIcon} source={question} />
       
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
    height: 200
  },

  questionIcon: {
   position: 'absolute',
   top: -220,
   left: 110,
    width: 70,
    height: 70
  }

});