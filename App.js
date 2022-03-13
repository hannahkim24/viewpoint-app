import * as React from 'react';
import { useState } from 'react';
import MapView from 'react-native-maps';
import { StatusBar } from 'react-native'

import { Animated, Image, Pressable, Text, View, StyleSheet, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './LandingPage.js'
import HelpVideo from './HelpVideo.js';
import MapStart from './mapView.js';
import MapLoc1 from './mapView3.js';
import MapLoc2 from './mapView4.js';
import MapEnd from './mapViewEnd.js';

import Location1Arrival from './Location1Arrival.js';
import Location1Viewing from './Location1Viewing.js';

import Location2Arrival from './Location2Arrival.js';
import Location2Viewing from './Location2Viewing.js';

import Location3Arrival from './Location3Arrival.js';
import Location3Viewing from './Location3Viewing.js';

import ViewVideoMemory1 from './components/ViewVideo1.js';
import ViewTextMemory1 from './components/ViewText1.js';

import ViewVideoMemory2 from './components/ViewVideo2.js';
import ViewTextMemory2 from './components/ViewText2.js';

import ViewVideoMemory3 from './components/ViewVideo3.js';
import ViewTextMemory3 from './components/ViewText3.js';

import AddMemory1 from './add_memories/AddMemory1.js';
import AddMemory2 from './add_memories/AddMemory2.js';
import AddMemory3 from './add_memories/AddMemory3.js';

import AddVideoMemory1 from './add_memories/AddVideo1.js';
import AddVideo1Confirm from './add_memories/AddVideo1Confirm.js';
import AddVideo1Submit from './add_memories/AddVideo1Submit.js';
import AddVideo1Review from './add_memories/AddVideo1Review.js';
import AddVideo1Complete from './add_memories/AddVideo1Complete.js';

import AddTextMemory1 from './add_memories/AddText1.js';
import AddText1Confirm from './add_memories/AddText1Confirm.js';
import AddText1Submit from './add_memories/AddText1Submit.js';

import AddVideoMemory2 from './add_memories/AddVideo2.js';
import AddVideo2Confirm from './add_memories/AddVideo2Confirm.js';
import AddVideo2Submit from './add_memories/AddVideo2Submit.js';
import AddVideo2Review from './add_memories/AddVideo2Review.js';
import AddVideo2Complete from './add_memories/AddVideo2Complete.js';


import AddTextMemory2 from './add_memories/AddText2.js';
import AddText2Confirm from './add_memories/AddText2Confirm.js';
import AddText2Submit from './add_memories/AddText2Submit.js';

import AddVideoMemory3 from './add_memories/AddVideo3.js';
import AddVideo3Confirm from './add_memories/AddVideo3Confirm.js';
import AddVideo3Submit from './add_memories/AddVideo3Submit.js';
import AddVideo3Review from './add_memories/AddVideo3Review.js';
import AddVideo3Complete from './add_memories/AddVideo3Complete.js';

import AddTextMemory3 from './add_memories/AddText3.js';
import AddText3Confirm from './add_memories/AddText3Confirm.js';
import AddText3Submit from './add_memories/AddText3Submit.js';

import mapNav from './images/mapNav.png';
import logoScreen from './images/LogoPage.jpeg'
function LogoPage({ navigation }) {
  const [mapRegion, setmapRegion] = useState({
    latitude: 	37.424157,
    longitude: -122.1697,
    latitudeDelta: 0.03, 
    longitudeDelta: 0.03,
    
  });
  return (
    
    <View style={styles.container}>
     
     <Image style={styles.logoPhoto} source={logoScreen} />
      <Pressable style={styles.continueButton}onPress={() => navigation.navigate('Home')}  >
        
       <Text style={styles.continueButtonText}> Tap to Continue</Text>
      
      </Pressable> 
</View>
     
  );
}


const Stack = createStackNavigator(); 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Logo" component={LogoPage}  options={{animationEnabled: false,headerShown: false}} />
        <Stack.Screen name="Home" component={Home}  options={{animationEnabled: false,headerShown: false}} />
        <Stack.Screen name="HelpVideo" component={HelpVideo}  options={{animationEnabled: false,headerShown: false}} />
        <Stack.Screen name="MapStart" component={MapStart} options={{animationEnabled: false,headerShown: false}}  />
        <Stack.Screen name="MapLoc1" component={MapLoc1} options={{animationEnabled: false,headerShown: false}}  />
        <Stack.Screen name="MapLoc2" component={MapLoc2} options={{animationEnabled: false,headerShown: false}}  />
        <Stack.Screen name="MapEnd" component={MapEnd} options={{animationEnabled: false,headerShown: false}}  />
        <Stack.Screen name="Location1Arrival" component={Location1Arrival} options={{animationEnabled: false, headerShown: false}} />
        <Stack.Screen name="Location1Viewing" component={Location1Viewing} options={{animationEnabled: false, headerShown: false}} />

        <Stack.Screen name="Location2Arrival" component={Location2Arrival} options={{animationEnabled: false, headerShown: false}} />
        <Stack.Screen name="Location2Viewing" component={Location2Viewing} options={{animationEnabled: false,headerShown: false}} />

        <Stack.Screen name="Location3Arrival" component={Location3Arrival} options={{animationEnabled: false, headerShown: false}} />
        <Stack.Screen name="Location3Viewing" component={Location3Viewing} options={{animationEnabled: false, headerShown: false}} />

        <Stack.Screen name="ViewVideoMemory1" component={ViewVideoMemory1} options={{animationEnabled: false, headerShown: false}} />
        <Stack.Screen name="ViewTextMemory1" component={ViewTextMemory1} options={{animationEnabled: false, headerShown: false}}/>

        <Stack.Screen name="ViewVideoMemory2" component={ViewVideoMemory2} options={{animationEnabled: false, headerShown: false}} />
        <Stack.Screen name="ViewTextMemory2" component={ViewTextMemory2} options={{animationEnabled: false, headerShown: false}}/>

        <Stack.Screen name="ViewVideoMemory3" component={ViewVideoMemory3} options={{animationEnabled: false, headerShown: false}} />
        <Stack.Screen name="ViewTextMemory3" component={ViewTextMemory3} options={{animationEnabled: false, headerShown: false}}/>
        
        <Stack.Screen name="AddMemory1" component={AddMemory1} options={{animationEnabled: false, headerShown: false}} />
        <Stack.Screen name="AddMemory2" component={AddMemory2} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddMemory3" component={AddMemory3} options={{animationEnabled: false, headerShown: false}} />

        <Stack.Screen name="AddVideoMemory1" component={AddVideoMemory1} options={{animationEnabled: false, headerShown: false}} />
        <Stack.Screen name="AddVideo1Confirm" component={AddVideo1Confirm} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddVideo1Submit" component={AddVideo1Submit} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddVideo1Review" component={AddVideo1Review} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddVideo1Complete" component={AddVideo1Complete} options={{animationEnabled: false, headerShown: false}}/>

        <Stack.Screen name="AddTextMemory1" component={AddTextMemory1} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddText1Confirm" component={AddText1Confirm} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddText1Submit" component={AddText1Submit} options={{animationEnabled: false, headerShown: false}}/>

        <Stack.Screen name="AddVideoMemory2" component={AddVideoMemory2} options={{animationEnabled: false, headerShown: false}} />
        <Stack.Screen name="AddVideo2Confirm" component={AddVideo2Confirm} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddVideo2Submit" component={AddVideo2Submit} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddVideo2Review" component={AddVideo2Review} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddVideo2Complete" component={AddVideo2Complete} options={{animationEnabled: false, headerShown: false}}/>

        <Stack.Screen name="AddTextMemory2" component={AddTextMemory2} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddText2Confirm" component={AddText2Confirm} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddText2Submit" component={AddText2Submit} options={{animationEnabled: false, headerShown: false}}/>

        <Stack.Screen name="AddVideoMemory3" component={AddVideoMemory3} options={{animationEnabled: false, headerShown: false}} />
        <Stack.Screen name="AddVideo3Confirm" component={AddVideo3Confirm} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddVideo3Submit" component={AddVideo3Submit} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddVideo3Review" component={AddVideo3Review} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddVideo3Complete" component={AddVideo3Complete} options={{animationEnabled: false, headerShown: false}}/>

        <Stack.Screen name="AddTextMemory3" component={AddTextMemory3} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddText3Confirm" component={AddText3Confirm} options={{animationEnabled: false, headerShown: false}}/>
        <Stack.Screen name="AddText3Submit" component={AddText3Submit} options={{animationEnabled: false, headerShown: false}}/>
        



      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  questionIcon: {
   position: 'absolute',
   top: -220,
   left: 110,
    width: 70,
    height: 70
  },

  logoPhoto: {
    width: '100%',
    height: '100%'
  },


  continueButton: {
    marginTop: 10,
    overflow: 'hidden' ,
    padding: 10,
    color: 'white',
    position: 'absolute',
    bottom: 120
   
  },

  continueButtonText: {
    fontSize: 18,
    color: '#FF8F00',
  },
  

});