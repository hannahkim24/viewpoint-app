import * as React from 'react';
import { useState, useEffect } from 'react';
import { Image, Pressable, Text, View, StyleSheet, Button, } from 'react-native';
import { Video} from 'expo-av';

import WalkVideo from './videos/IMG_0401.mp4';

import continueIcon from './icons/right_arrow.png';
import loc1Nav from './icons/loc1-nav.png';
import FadeInOut from 'react-native-fade-in-out';
import MapIcon from './icons/map-icon-dark.png';

export default function Location1Arrive({ navigation }) {
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
   
  
    <View style={styles.homeScreen} >
    
      <Video source = {WalkVideo}
            resizeMode="fill"
            style={styles.video}
            shouldPlay   
      />
      <Text>  </Text>

      <Pressable  style = {styles.directions}  >
        <Image style={styles.mapNav} source={loc1Nav} />
      </Pressable> 

      <Pressable onPress={() => navigation.navigate('MapLoc1')}>
          <Image style={styles.viewMemoryButtonIcons} source={MapIcon}/>
          </Pressable>
      
      <FadeInOut visible={visible}  duration={7000} >
          <Pressable  onPress={() => navigation.navigate('Location1Viewing')} >
              <Text style={styles.locationLabel}>The Sieve of Eratosthenes</Text>
          </Pressable>   
          
        <Pressable  onPress={() => navigation.navigate('Location2Arrival')} >
          <Image style={styles.continueArrow} source={continueIcon}/>
        </Pressable>

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


  backButtonBar: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FF8F00',
    borderRadius: 10,
    width: 180,
    height: 40,
    position: 'absolute',
    bottom: 50
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

  video: {
    alignSelf: 'center',
    position: 'absolute',
    top: 130,
    width: 800,
    height: 800,
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