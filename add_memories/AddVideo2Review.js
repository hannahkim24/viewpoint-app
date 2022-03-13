import React, { useState, useEffect } from 'react';
import { Image, Pressable, Button, StyleSheet, Text, View } from 'react-native'
import {Video} from 'expo-av';

import BackButton from '../icons/BackIcon.png';


export default function Location2AddVideoMemory({ route, navigation }) {
    const [status, setStatus] = React.useState({});
    const params = route.params;
    const record = params.source;
    const video = params.videoParam;
   
    return (
      <View style={styles.container}>
     
      <Text> </Text>
      <Text> </Text>
      <View style={styles.addMemoriesBar}>
         
         <Pressable onPress={() => navigation.navigate('Location2Viewing')}>
         <Image style={styles.viewMemoryButtonIcons} source={BackButton}/>
         </Pressable>
     </View>
         <View style={{ flex: 1}}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: record,
          }}
          isLooping
          useNativeControls
          resizeMode="contain"
          
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        
         <View style={styles.bottomBar}> 
          <Pressable onPress={() => navigation.navigate('AddVideo2Submit')}>
            <Text style={styles.bottomButtons}>     Record Again          |</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('AddVideo2Complete')}>
            <Text style={styles.bottomButtons}>     Submit Video  </Text>
          </Pressable>
          </View>
      
      </View>
      </View>
     
    );
  }
  
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'black'
    }, 
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    fixedRatio:{
        flex: 1,
        aspectRatio: 1
    },
    video: {
      alignSelf: 'center',
      width: '100%',
      height: '90%',
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    bottomBar: {
      backgroundColor: 'black',
    
      flexDirection: 'row',
    },

    bottomButtons: {
      
      color: 'white',
      lineHeight: 35,
      fontSize: 20,
      borderColor: 'black',
      borderWidth: 10

    },

    addMemoriesBar: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: 'black',
      
      overflow: 'hidden' ,
      padding: 10,
   
    },

    

    
  })
  
