import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Modal, ScrollView  } from 'react-native';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

// Initialize the Geocoder with your Google Maps API key
Geocoder.init('YOUR_GOOGLE_MAPS_API_KEY');

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setname] = useState('');
  const [addresses, setAddresses] = useState([
  ]);
  const [state, setState] = useState({
    region: {
      latitude: 19.3919,
      longitude: 72.8397,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    pickupCoords: new AnimatedRegion({
      latitude: 19.3919,
      longitude: 72.8397,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }),
    address: 'Fetching address...',
    typedAddress: '',
  });

  const { region, pickupCoords, address, typedAddress } = state;

  useEffect(() => {
    fetchAddressFromCoords(pickupCoords.latitude.__getValue(), pickupCoords.longitude.__getValue());
  }, [pickupCoords]);

  const onRegionChangeComplete = (newRegion) => {
    setState((prevState) => ({
      ...prevState,
      region: newRegion,
    }));
    pickupCoords.timing({
      latitude: newRegion.latitude,
      longitude: newRegion.longitude,
      duration: 500, // Duration of the animation in milliseconds
    }).start();
    fetchAddressFromCoords(newRegion.latitude, newRegion.longitude);
  };

  const fetchAddressFromCoords = (latitude, longitude) => {
    Geocoder.from(latitude, longitude)
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const addressComponent = json.results[0].formatted_address;
          setState((prevState) => ({
            ...prevState,
            address: addressComponent,
          }));
        } else {
          console.warn('No results found for the coordinates.');
        }
      })
      .catch((error) => {
        console.warn('Error fetching geocoding data:', error);
      });
  };

  const handleAddressInputChange = (text) => {
    setState((prevState) => ({
      ...prevState,
      typedAddress: text,
    }));
  };

  const handleSearchAddress = () => {
    if (typedAddress.trim() === '') return;

    Geocoder.from(typedAddress)
      .then((json) => {
        if (json.results && json.results.length > 0) {
          const { lat, lng } = json.results[0].geometry.location;
          pickupCoords.timing({
            latitude: lat,
            longitude: lng,
            duration: 500, // Duration of the animation in milliseconds
          }).start();
          setState((prevState) => ({
            ...prevState,
            address: typedAddress,
            typedAddress: '',
          }));
        } else {
          console.warn('No results found for the address.');
        }
      })
      .catch((error) => {
        console.warn('Error fetching geocoding data:', error);
      });
  };
  const handleAddAddress = () => {
    setAddresses([...addresses, { id: Date.now(), name: name, address: newAddress, description: 'Description', phone: phone }]);
    setNewAddress('');
    setModalVisible(false);
  };

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
        <View style={{ marginTop: moderateScaleVertical(10), elevation: 1, flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: moderateScaleVertical(20), backgroundColor: 'rgba(255, 255, 255, 1)', marginTop: moderateScaleVertical(20), width: moderateScale(310), marginLeft: moderateScaleVertical(10) }}
            placeholder="Enter Address"
            value={typedAddress}
            onChangeText={handleAddressInputChange}
          />
          <TouchableOpacity onPress={handleSearchAddress} style={{ borderRadius: 10, width: moderateScale(40), height: moderateScaleVertical(40), backgroundColor: 'rgba(255, 255, 255, 1)', borderWidth: 1, borderColor: '#CCC' }}>
            <Image source={require('./assets/search.png')} style={{ height: moderateScaleVertical(25), width: moderateScale(25), marginTop: moderateScaleVertical(5), marginLeft: moderateScale(5),position:'absolute'}} />
          </TouchableOpacity>
        </View>
        <Marker.Animated
          coordinate={pickupCoords}
          title={address}
          description='customer'
          pinColor='rgba(90, 58, 137, 1)'
          identifier='origin'
        />
      </MapView>
      <View style={{ flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 1)' }}>
        <View style={{ marginTop: moderateScaleVertical(10), flexDirection: 'row', marginBottom: moderateScaleVertical(10) }}>
          <Image source={require('./assets/fi-ss-marker.png')} style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: 'rgba(90, 58, 137, 1)' }} />
          <View style={{ marginLeft: moderateScale(20), marginRight: moderateScale(30) }}>
            <Text style={{ marginBottom: 5, fontSize: 17, fontWeight: '600' }}>Home</Text>
            <Text>{address}</Text>
          </View>
        </View>
        <View style={{ marginTop: moderateScaleVertical(10), elevation: 1 }}>
        {/* <TouchableOpacity
          style={{ backgroundColor: 'rgba(90, 58, 137, 1)', width: moderateScale(250), padding: moderateScale(15), borderRadius: 10, marginTop: moderateScaleVertical(20), alignSelf: 'center', position: 'absolute', bottom: 10 }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>Add Address</Text>
        </TouchableOpacity> */}
         <TouchableOpacity style={{ backgroundColor: 'rgba(90, 58, 137, 1)', width: moderateScale(250), padding: moderateScale(15), borderRadius: 10, alignSelf: 'center' }}
          onPress={() => setModalVisible(true)}>
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>Add Address</Text>
        </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible} >
    
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <View style={{ position:'absolute',top:200}}>
           <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 10, alignItems: 'center'  }}>
           <Image source={require('./assets/cancel.png')} style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: 'white' }} />
            </TouchableOpacity>
        </View>
          <View style={{ width: '100%', backgroundColor: '#FFF', padding: 20, borderRadius: 10 ,height:"70%",position:'absolute',bottom:moderateScaleVertical(0)}}>
           
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Add New Address</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Enter name"
              value={name}
              onChangeText={setname}
            />
            <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Enter Bulding Address"
              value={newAddress}
              onChangeText={setNewAddress}
            />
             <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Enter phone"
              value={phone}
              onChangeText={setPhone}
            />
              <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Land Mark"
              value={phone}
              onChangeText={setPhone}
            />
            <TouchableOpacity onPress={handleAddAddress} style={{ backgroundColor: 'rgba(90, 58, 137, 1)', padding: 15, borderRadius: 5, alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default App;
