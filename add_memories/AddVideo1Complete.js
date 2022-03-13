import * as React from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';

import { Video } from 'expo-av';

import StayVideo from '../videos/IMG_0402.mp4';

import BackIcon from '../icons/BackIcon.png';
import LogoIcon from '../icons/logo.png';

export default function Location1Viewing({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <Video source = {StayVideo}
            resizeMode="cover"
            style={StyleSheet.absoluteFill}
            shouldPlay  
            
      />
      <View style={styles.addMemoriesBar}>
          
        
           
			</View>
      
      <View style={styles.bottomBar}>
       
        <View style={styles.addMemoryOptions} >
            <Text style={styles.addMemoryButtonText}>         Memory Added!    </Text>
        </View>

        
         
          <Pressable style={styles.backButton} onPress={() => navigation.navigate('Location1Viewing')} >
            <Text style={styles.backButtonText}>       Back to Memories      </Text>
          </Pressable>
 

       
        </View>
        </View>
     
    
  );
}




const styles = StyleSheet.create({
  homeScreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  homeScreenText: {
    fontSize: 32,
  },

  addMemoryButtonText : {
    fontSize: 18,
    color: '#C25D00',
  },


  addMemoriesBar: {
    flex: 0.9,
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  addMemoryOptions: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C25D00',
    overflow: 'hidden' ,
    padding: 10,
  },

  addMemoryList: {
    flexDirection: 'row',
    alignItems: 'center'

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
    color: 'white',
  },
  
  logoIcon: {
    width: 150,
    height: 150,
    position: 'absolute',
    bottom: 250,
    right: -80
  },
  headBackText: {
    color: 'white',
    fontSize: 18,
  },

  bottomBar: {
    flexDirection: 'column'
  }
  

});