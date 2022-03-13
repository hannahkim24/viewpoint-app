import * as React from 'react';
import { useState, useEffect } from 'react';
import { Image, Pressable, Text, View, StyleSheet, Button, } from 'react-native';
import { Video} from 'expo-av';

import WalkVideo from './videos/Demo-Video.mp4';

export default function HelpVideo({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  

  return (
   
  
    <View style={styles.homeScreen} >
    
      <Video source = {WalkVideo}
           resizeMode="cover"
           style={StyleSheet.absoluteFill}
           useNativeControls
           isLooping
           onPlaybackStatusUpdate={status => setStatus(() => status)}  
      />

    <View style={styles.backButtonBar}>
          <Pressable  onPress={() => navigation.navigate('Home')} >
              <Text style={styles.backButtonText}>  Head Back to Map  </Text>
          </Pressable>   
          </View>
  </View>

  );
}


const styles = StyleSheet.create({
  homeScreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  locationLabel: {
    color: '#C25D00',
    backgroundColor:'white',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C25D00',
    overflow: 'hidden' ,
    padding: 10,
    position: 'absolute',
    top: 120,
    right: -120
    // ADD SHADOWS?
    

  },


  backButtonBar: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FF8F00',
    borderRadius: 10,
    width: 180,
    height: 40,
    position: 'absolute',
    top: 60
  },

  backButtonText: {
    fontSize: 18,
    color: 'white',
  },

  continueArrow: {
    height: 150,
    width: 300,
    position: 'absolute',
    bottom: -350,
    left: -160
  },

  directions: {
    position: 'absolute',
    top: 20,
    left:0
  },

  mapNav: {
    width: 400,
    height: 150
  },



  viewMemoryButtonIcons: {
    width: 30,
    height: 30,
    resizeMode:'contain',
    position: 'absolute',
    top: -373,
    left: -180
    
  },

  


  

});