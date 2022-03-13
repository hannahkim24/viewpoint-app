import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, Pressable, Button, TouchableWithoutFeedbackBase } from 'react-native'

import Swiper from 'react-native-swiper'
import { Video, AVPlaybackStatus } from 'expo-av';

import MemoryOne from '../video_memories/loc2mem1.mp4';
import MemoryTwo from '../video_memories/loc2mem2.mp4';
import MemoryThree from '../video_memories/loc2mem3.mp4';
import BackButton from '../icons/BackIcon.png';


export default function ViewVideoMemory({ navigation }) { 
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
    return (
      
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Video source = {MemoryOne}
            resizeMode="cover"
            style={StyleSheet.absoluteFill}
            useNativeControls
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
          
          <Pressable onPress={() => navigation.navigate('Location2Viewing')}>
          <Image style={styles.backButton} source={BackButton}/>
          </Pressable>
          
        </View>
        <View style={styles.slide2}>
          <Video source = {MemoryTwo}
            resizeMode="cover"
            style={StyleSheet.absoluteFill}
            useNativeControls
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}  

          />
         <Pressable onPress={() => navigation.navigate('Location2Viewing')}>
          <Image style={styles.backButton} source={BackButton}/>
          </Pressable>
        </View>

        <View style={styles.slide3}>
          <Video source = {MemoryThree}
            resizeMode="cover"
            style={StyleSheet.absoluteFill}
            useNativeControls
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}  

          />
         <Pressable onPress={() => navigation.navigate('Location2Viewing')}>
          <Image style={styles.backButton} source={BackButton}/>
          </Pressable>
        </View>
         
        
      </Swiper>
    );
  
}


const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  backButton: {
    position: 'absolute',
    top: -360,
    left: 150,

  }
})

