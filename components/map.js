import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const App = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 	37.429907,
    longitude: -122.169077,
    latitudeDelta: 0.03, 
    longitudeDelta: 0.03,
    
  });
  return (
    
    <View style={styles.container}>
      
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      />
      
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});