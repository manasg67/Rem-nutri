import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

// Initialize the Geocoder with your Google Maps API key
Geocoder.init('YOUR_GOOGLE_MAPS_API_KEY');

const App = () => {
  const [state, setState] = useState({
    region: {
      latitude: 19.3919,
      longitude: 72.8397,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    pickupcords: {
      latitude: 19.3919,
      longitude: 72.8397,
    },
    address: 'Fetching address...',
  });

  const { region, pickupcords, address } = state;

  const onRegionChangeComplete = (newRegion) => {
    setState((prevState) => ({
      ...prevState,
      region: newRegion,
      pickupcords: {
        latitude: newRegion.latitude,
        longitude: newRegion.longitude
      }
    }));
    fetchAddress(newRegion.latitude, newRegion.longitude);
  };

  const fetchAddress = (latitude, longitude) => {
    Geocoder.from(latitude, longitude)
      .then(json => {
        const addressComponent = json.results[0].formatted_address;
        setState((prevState) => ({
          ...prevState,
          address: addressComponent
        }));
      })
      .catch(error => console.warn(error));
  };

  useEffect(() => {
    fetchAddress(pickupcords.latitude, pickupcords.longitude);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScaleVertical(10), margin: moderateScaleVertical(10) }}>
        <TouchableOpacity>
          <Image source={require('./assets/left-arrow.png')} style={{ height: moderateScaleVertical(20), width: moderateScale(30) }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: moderateScale(90) }}>Select location</Text>
      </View>
      <MapView
        style={{ height: moderateScaleVertical(556) }}
        initialRegion={region}
        onRegionChangeComplete={onRegionChangeComplete}
      >
        <Marker
          coordinate={pickupcords}
          title={address}
          description='customer'
          pinColor='rgba(90, 58, 137, 1)'
          identifier='origin'
        />
      </MapView>
      <View style={{ flexDirection: 'column', margin: moderateScale(15) }}>
        <View style={{ flexDirection: 'row', marginBottom: moderateScaleVertical(10) }}>
          <Image source={require('./assets/fi-ss-marker.png')} style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: 'rgba(90, 58, 137, 1)' }} />
          <View style={{ marginLeft: moderateScale(20), marginRight: moderateScale(30) }}>
            <Text style={{ marginBottom: 5, fontSize: 17, fontWeight: '600' }}>Home</Text>
            <Text>{address}</Text>
          </View>
        </View>
        <View style={{marginTop:moderateScaleVertical(10),elevation:1,}}>
        <TouchableOpacity style={{ backgroundColor: 'rgba(90, 58, 137, 1)', width: moderateScale(250), padding: moderateScale(15), borderRadius: 10, alignSelf: 'center' }}>
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>Add Address</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
