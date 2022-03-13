import React, { useState, useEffect } from 'react';
import { Image, Pressable, Button, StyleSheet, Text, View } from 'react-native'
import {Video} from 'expo-av';
import { Camera } from 'expo-camera';



import Swiper from 'react-native-swiper';
import BackButton from '../icons/BackIcon.png';
import CameraFlip from '../icons/camera-flip.png';

import StayVideo from '../videos/IMG_0402.mp4';
import prof1 from '../images/prof1.png';
import prof2 from '../images/prof2.png';
import prof3 from '../images/prof3.png';

export default function AddVideoMemory({ navigation }) {
    const [hasAudioPermission, setHasAudioPermission] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    
    const [type, setType] = useState(Camera.Constants.Type.back);
    const[alreadyStarted, setAlreadyStarted] = useState(false);
    
    const video = React.useRef(null);
    const [buttonText, setButtonText] = useState("  Click Here to START Recording");
  
    const [record, setRecord] = useState(null);
    const buttonDirections = async() => {
      if (alreadyStarted) {
        // if the user is trying to end recording, reset button, stop video, save video uri to const "record", pass to navigation
        setButtonText("  Click Here to START Recording");
        stopVideo();
        
        navigation.navigate('AddVideo1Review', {source: record, videoParam: video});
      } else {
        // user wants to start recording
        takeVideo();  // function starts recording and saves video uri to constant "record" with "setRecord"
        changeText("  Click Again to STOP Recording");
        setAlreadyStarted(true);
      }
    }

 

    const takeVideo = async () => {
        if(camera){
            const data = await camera.recordAsync({
              maxDuration: 10000
            });
            setRecord(data.uri);
            console.log(data.uri); 
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
         
         <Pressable onPress={() => navigation.navigate('Location1Viewing')}>
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
  
