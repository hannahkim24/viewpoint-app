import React from 'react'
import {  Image, Pressable, Button, StyleSheet, Text, View } from 'react-native'
import {Video} from 'expo-av';
import Swiper from 'react-native-swiper';
import BackButton from '../icons/BackIcon.png';

import StayVideo from '../videos/IMG_0402.mp4';
import prof1 from '../images/prof1.png';
import prof2 from '../images/prof2.png';
import prof3 from '../images/prof3.png';

export default function ViewTextMemory({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
    return (
      <>
      <Video source = {StayVideo}
            resizeMode="cover"
            style={StyleSheet.absoluteFill}
            shouldPlay  
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      <Swiper style={styles.wrapper} showsButtons={true}>
        
        <View style={styles.slide}>
          <Text style={styles.header}>Bike Fun with Sculpture </Text>
          
          <Text style={styles.text}>I couldn't help but notice this red, towering scuplture. A fun obstacle course to bike around :)</Text>
          <Text style={styles.text}> </Text>
          <View style={styles.userInfo}>
            <Image style={styles.userPhoto} source={prof1}/>
            <Text style={styles.userName}> @user356</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Text style={styles.header}>Sieve of Eratosthenes </Text>
          <Text style={styles.text}> The sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to any given limit. This Mark di Suvero sculpture is a prominent work, but I really don’t know why its name is an algorithm. </Text>
          <Text style={styles.text}> </Text>
          <View style={styles.userInfo}>
            <Image style={styles.userPhoto} source={prof2}/>
            <Text style={styles.userName}> @user918</Text>
          </View>
        </View>
        
        <View style={styles.slide}>
          <Text style={styles.header}>Climbing Challenge??</Text>
          <Text style={styles.text}>Apparently, this sculpture is 23 feet tall. Has anyone successfully climbed to the top? King of the world!!!!</Text>    
          <Text style={styles.text}> </Text>
          <View style={styles.userInfo}>
            <Image style={styles.userPhoto} source={prof3}/>
            <Text style={styles.userName}> @user098</Text>
          </View>
        </View>
        </Swiper>
        <Pressable onPress={() => navigation.navigate('Location1Viewing')}>
            <Image style={styles.backIcon} source={BackButton}/>
          </Pressable>
      </>
    );
  
}


const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    opacity: 0.7
  },

  image: {
    width: 600,
    height: 600
  },

  text: {
    color: 'black',
    fontSize: 20,
    lineHeight: 30
  },

  header: {
    fontSize: 25,
    lineHeight: 80,
    fontWeight: 'bold'
  },

  backIcon: {
    position: 'absolute',
    bottom: 770,
    right: 20
  },
  userInfo: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center'

  },
  userPhoto: {
    height: 50,
    width: 50
  },

})

