import React, { Component } from 'react'
import { Image, Pressable, Button, StyleSheet, Text, View } from 'react-native'
import {Video} from 'expo-av';
import Swiper from 'react-native-swiper';
import BackButton from '../icons/BackIcon.png';
import StayVideo from '../videos/IMG_0393_3.mp4';


import prof1 from '../images/prof2.png';
import prof2 from '../images/prof5.png';
import prof3 from '../images/prof7.png';


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
          <Text style={styles.header}>Emotional Statues!!</Text>
          <Text style={styles.text}> How can a college campus be this beautiful? And these statues look so sorrowful. I think I lost track of time just observing them.</Text>
          <Text style={styles.text}> </Text>
          <View style={styles.userInfo}>
            <Image style={styles.userPhoto} source={prof2}/>
            <Text style={styles.userName}> @user421</Text>
          </View>
        </View>
        <View style={styles.slide}>
        <Text style={styles.header}>Burghers of Calais</Text>
          <Text style={styles.text}> The Burghers of Calais represent the idea of freedom from oppression. It tells the story of the siege of Calais in 1347, during the Hundred Years War. Their fatalistic poses with ropes tied around their necks reflect how they have sacrificed themselves to spare the lives of everyone else in the city. It’s meaningful to just stand there and try to figure out what they were thinking in this situation.</Text>
          <Text style={styles.text}> </Text>
          <View style={styles.userInfo}>
            <Image style={styles.userPhoto} source={prof1}/>
            <Text style={styles.userName}> @user421</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Text style={styles.header}>Careful with climbing!</Text>
          <Text style={styles.text}> I don't know why, but I had this sudden urge to climb these statues. Luckily, they were stuck solid onto the ground. I had a great time before someone told me to come down from there :)</Text>
          <Text style={styles.text}> </Text>
          <View style={styles.userInfo}>
            <Image style={styles.userPhoto} source={prof3}/>
            <Text style={styles.userName}> @user421</Text>
          </View>
        </View>
      </Swiper>
      <Pressable onPress={() => navigation.navigate('Location3Viewing')}>
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