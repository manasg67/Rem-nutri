import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

const App = () => {
  const [state, setState] = useState({
    pickupcords: {
      latitude: 19.3919,
      longitude: 72.8397,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationcords: {
      latitude: 19.1874,
      longitude: 72.8484,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  });

  const { pickupcords, droplocationcords } = state;

  const onMarkerDragEnd = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setState((prevState) => ({
      ...prevState,
      pickupcords: {
        ...prevState.pickupcords,
        latitude,
        longitude
      }
    }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScaleVertical(10), margin: moderateScaleVertical(10) }}>
        <TouchableOpacity>
          {/* <Image source={require('./assets/left-arrow.png')} style={{ height: moderateScaleVertical(20), width: moderateScale(30) }} /> */}
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: moderateScale(90) }}>Select location</Text>
      </View>
      <MapView style={{ height: moderateScaleVertical(556) }} initialRegion={pickupcords}>
        <Marker
          coordinate={pickupcords}
          title="Your location"
          description='customer'
          pinColor='rgba(90, 58, 137, 1)'
          identifier='origin'
          draggable
          onDragEnd={onMarkerDragEnd}
        />
      </MapView>
      <View style={{ flexDirection: 'column', margin: moderateScale(15) }}>
        <View style={{ flexDirection: 'row', marginBottom: moderateScaleVertical(10) }}>
          {/* <Image source={require('./assets/fi-ss-marker.png')} style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: 'rgba(90, 58, 137, 1)' }} /> */}
          <View style={{ marginLeft: moderateScale(20) }}>
            <Text style={{ marginBottom: 5, fontSize: 17, fontWeight: '600' }}>Home</Text>
            <Text>301, JSR Enclave, Danvaipetapuram</Text>
            <Text>Lorem Ipsum Lorem Dolor Sit</Text>
          </View>
        </View>
        <TouchableOpacity style={{ backgroundColor: 'rgba(90, 58, 137, 1)', width: moderateScale(250), padding: moderateScale(15), borderRadius: 10, alignSelf: 'center' }}>
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>Add Address</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;
