import React, { useState, useEffect } from 'react';
import { Image, Pressable, Button, StyleSheet, Text, View } from 'react-native'
import {Video} from 'expo-av';
import { Camera } from 'expo-camera';

import BackButton from '../icons/BackIcon.png';
import CameraFlip from '../icons/camera-flip.png';


export default function AddVideoMemory({ navigation }) {
    const [hasAudioPermission, setHasAudioPermission] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [record, setRecord] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const[alreadyStarted, setAlreadyStarted] = useState(false);
    
    const video = React.useRef(null);
    const [buttonText, setButtonText] = useState("  Click Here to START Recording");
  
    const buttonDirections = async() => {
      if (alreadyStarted) {
        setButtonText("  Click Here to START Recording");
        stopVideo();
        navigation.navigate('AddVideo3Review', {source: record, videoParam: video});
      } else {
        takeVideo();
        changeText("  Click Again to STOP Recording");
        setAlreadyStarted(true);
      }
    }

    useEffect(() => {
      (async () => {
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
        const audioStatus = await Camera.requestMicrophonePermissionsAsync();
        setHasAudioPermission(audioStatus.status === 'granted');
  
      })();
    }, []);
  
    const takeVideo = async () => {
      if(camera){
          const data = await camera.recordAsync({
            maxDuration: 10000
          });
          setRecord(data.uri);
      }
    }
  
    const stopVideo = async () => {
      camera.stopRecording();
      setAlreadyStarted(null);
      
    }
    const changeText = (text) => setButtonText(text);

    if (hasCameraPermission === null || hasAudioPermission === null ) {
      return <View />;
    }
    if (hasCameraPermission === false || hasAudioPermission === false) {
      return <Text>No access to camera and/or audio!</Text>;
    }
  
      
    return (
      <View style={styles.container}>
        <View style={{ flex: 1}}>
    
        <Text>  </Text>
        <Text>  </Text>
      <View style={styles.addMemoriesBar}>
         
         <Pressable onPress={() => navigation.navigate('Location3Viewing')}>
         <Image style={styles.viewMemoryButtonIcons} source={BackButton}/>
         </Pressable>
          
     </View>
          <View style={styles.cameraContainer}>
              <Camera 
              ref={ref => setCamera(ref)}
              style={styles.fixedRatio} 
              type={type}
              ratio={'10:1'} />
          </View>
                   
         <View style={styles.buttonsBar}> 
         <Text>   </Text>
         <Pressable style={styles.flipIconBar} onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
          
            <Image style={styles.flipIcon} source={CameraFlip}/>
          </Pressable>

           <View style={styles.buttons}>
           
            <Pressable onPress={() =>  buttonDirections()}>
              <Text style={styles.recordingButtons}>   {buttonText}  </Text>
            </Pressable>
            
          </View>
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
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    fixedRatio:{
        aspectRatio: 0.6
    },

    buttonsBar: {
      
      flexDirection: 'row',
      backgroundColor: 'black',
      paddingTop: 10,
      paddingBottom: 25
    },
   
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
     
    },

    recordingButtons: {
      lineHeight: 35,
      fontSize: 20,
      color: 'white'
      
     },

     flipIcon: {
       backgroundColor: 'black',
       width: 50,
       height: 50
     },

     flipIconBar: {
        backgroundColor: 'black',

     },
     addMemoriesBar: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: 'black',
      
      overflow: 'hidden' ,
      padding: 10,
   
    },
  })
  
