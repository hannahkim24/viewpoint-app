import React, { Component } from 'react'
import { Image, Pressable, Button, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper';
import {Video} from 'expo-av';

import StayVideo from '../videos/IMG_0398.mp4';
import BackButton from '../icons/BackIcon.png';
import prof1 from '../images/prof4.png';
import prof2 from '../images/prof5.png';
import prof3 from '../images/prof6.png';

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
          <Text style={styles.header}>Hello,"Hello" Sculpture! </Text>
          <Text style={styles.text}>Say hello to the newest outdoor artwork on the Stanford campus. It is an ancient Greek column topped with unknown sits. To be honest, it looks so much like the Pokemon, Gyarados :P</Text>
          <Text style={styles.text}> </Text>
          <View style={styles.userInfo}>
            <Image style={styles.userPhoto} source={prof1}/>
            <Text style={styles.userName}> @user421</Text>
          </View>
        </View>
        <View style={styles.slide}>
        <Text style={styles.header}> I LOVE SCULPTURES!!</Text>
          <Text style={styles.text}>I love how it's named "Hello". These sculptures really make Stanford campus come alive again.</Text>
          <Text style={styles.text}> </Text>
          <View style={styles.userInfo}>
            <Image style={styles.userPhoto} source={prof2}/>
            <Text style={styles.userName}> @user888</Text>
          </View>
        </View>
        <View style={styles.slide}> 
          <Text style={styles.header}> Scary Sculpture at Night</Text>
          <Text style={styles.text}>I was roaming around at night, and I didn't know they installed a snake sculpture here. Needless to say, I almost fell off my bike. </Text>
          <Text style={styles.text}> </Text>
          <View style={styles.userInfo}>
            <Image style={styles.userPhoto} source={prof3}/>
            <Text style={styles.userName}> @user477</Text>
          </View>
        </View>
      </Swiper>
      <Pressable onPress={() => navigation.navigate('Location2Viewing')}>
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