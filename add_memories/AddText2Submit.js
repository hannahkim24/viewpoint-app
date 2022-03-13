import React, { useState, useEffect } from 'react';
import {  Image, Pressable, Button, StyleSheet, Text, View } from 'react-native';

import { AppRegistry, TextInput } from 'react-native';  
import {Video} from 'expo-av';
import Swiper from 'react-native-swiper';
import BackButton from '../icons/BackIcon.png';

import StayVideo from '../videos/IMG_0398.mp4';

import prof1 from '../images/prof1.png';
import prof2 from '../images/prof2.png';
import prof3 from '../images/prof3.png';

export default function ViewTextMemory({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [user, setUser] = useState("");



    return (
      <>
      <Video source = {StayVideo}
            resizeMode="cover"
            style={StyleSheet.absoluteFill}
            shouldPlay  
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      <View style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide}>
          
         < View style = {{flexDirection: 'row'}}>

            
            <TextInput  
                            style={styles.placeHolder} 
                            placeholder="Write a title here!" 
                            onChangeText={(value) => setTitle(value)}
                            
                        />  
          </View>
         <Text> </Text>
          
          <TextInput  
                            style={styles.text} 
                            placeholder="Type your memory in here!" 
                            onChangeText={(value) => setText(value)}
                            
                        />  
          <Text style={styles.text}> </Text>

          <View style={styles.userInfo}>
            <Image style={styles.userPhoto} source={prof1}/>
            <Text>   </Text>
            <TextInput  
                            style={styles.userName} 
                            placeholder="Insert @username" 
                            onChangeText={(value) => setText(value)}
                            
                        /> 
          </View>
          <Text> </Text>
          <Text> </Text>
          <Pressable style={styles.backButton} onPress={() => navigation.navigate('AddVideo2Complete')} >
            <Text style={styles.backButtonText}>                       Submit                                          </Text>
          </Pressable>
        
          
        </View>

        
        </View>
        <Pressable onPress={() => navigation.navigate('Location2Viewing')}>
            <Image style={styles.backIcon} source={BackButton}/>
          </Pressable>
      </>
    );
  
}


const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    padding: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    opacity: 0.9
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

  backButton: {
    marginTop: 10,
    backgroundColor: '#FF8F00',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C25D00',
    overflow: 'hidden' ,
    padding: 10,
    color: 'white',
    
   
  },

  backButtonText: {
    fontSize: 18,
    color: 'black',
   
  },

  placeHolder: {
    color: 'black',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold'
  }
})

