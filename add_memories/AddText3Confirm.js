import * as React from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';

import { Video } from 'expo-av';

import StayVideo from '../videos/IMG_0393_3.mp4';

import BackIcon from '../icons/BackIcon.png';
import LogoIcon from '../icons/logo.png';

export default function Location3Viewing({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <Video source = {StayVideo}
            resizeMode="cover"
            style={StyleSheet.absoluteFill}
            shouldPlay  
            
      />
      <View style={styles.addMemoriesBar}>
          
          <Pressable onPress={() => navigation.navigate('Location3Viewing')}>
          <Image style={styles.viewMemoryButtonIcons} source={BackIcon}/>
          </Pressable>
           
			</View>
      <Pressable onPress={() => navigation.navigate('AddTextMemory3Confirm')}>
          <Image style={styles.logoIcon} source={LogoIcon}/>
      </Pressable>
      
      <View style={styles.addMemoryOptions} >
           <Text style={styles.addMemoryButtonText}>    Is this the correct object?   </Text>         
      </View>
        <View style={styles.confirmation} >
          <Pressable onPress={() => navigation.navigate('AddText3Submit')}>
            <Text style={styles.addMemoryButtonText}>     Yes     |</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('AddTextMemory3')}>
            <Text style={styles.addMemoryButtonText}>      No     </Text>
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

  confirmation: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C25D00',
    overflow: 'hidden' ,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  
  logoIcon: {
    width: 150,
    height: 150,
    position: 'absolute',
    bottom: 190,
    right: -80
  }

});