import * as React from 'react';
import { useState, useEffect } from 'react';
import { Animated, Image, Pressable, Text, View, StyleSheet, Button, } from 'react-native';
import FadeInOut from 'react-native-fade-in-out';
import { Video, AVPlaybackStatus } from 'expo-av';

import WalkVideo from './videos/IMG_0393_1.mp4';

import loc1Nav from './icons/loc3-nav.png';
import MapIcon from './icons/map-icon-dark.png';

export default function Location3Arrive({ navigation }) {
  const video = React.useRef(null);
 
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  }

  const onScreenLoad = () => {
    setVisible(!visible);
  }
  useEffect(() => {
      // write your code here, it's like componentWillMount
      onScreenLoad();
  }, [])

  return (
    <View style={styles.homeScreen}>
      <Video source = {WalkVideo}
           resizeMode="fill"
           style={styles.video}
           shouldPlay 
      />


<Pressable  style = {styles.directions}  >
        <Image style={styles.mapNav} source={loc1Nav} />
      </Pressable> 

      <Pressable onPress={() => navigation.navigate('MapEnd')}>
          <Image style={styles.viewMemoryButtonIcons} source={MapIcon}/>
          </Pressable>
      
      <FadeInOut visible={visible}  duration={8000} >
          <Pressable  onPress={() => navigation.navigate('Location3Viewing')} >
            <Text style={styles.locationLabel}>The Burghers of Calais</Text>
          </Pressable>   
          <Text style={styles.arrivalNotif}>                You have arrived!                </Text>    

      </FadeInOut>
     
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

  arrivalNotif: {
    color: 'white',
    backgroundColor:'#C25D00',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C25D00',
    overflow: 'hidden' ,
    padding: 20,
    position: 'absolute',
    bottom: -300,
    right: -180
  },


  directions: {
    position: 'absolute',
    top: 10,
    left:0
  },

  mapNav: {
    width: 390,
    height: 120
  },

  video: {
    alignSelf: 'center',
    position: 'absolute',
    top: 110,
    width: 800,
    height: 800,
  },

  viewMemoryButtonIcons: {
    width: 30,
    height: 30,
    resizeMode:'contain',
    position: 'absolute',
    top: -362,
    left: -186
    
  },


  

});