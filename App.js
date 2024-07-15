import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Image, Modal } from 'react-native';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

const OrderDetails = () => {
  const [quantities, setQuantities] = useState([1, 1]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setname] = useState('');
  const [addresses, setAddresses] = useState([
    { id: 1, name: 'Home', address: '301, JSR Enclave, Danvaipetapuram', description: 'Lorem Ipsum Lorem Dolor Sit', phone: '+91 9123456789' },
    { id: 2, name: 'Office', address: '302, JSR Enclave, Danvaipetapuram', description: 'Lorem Ipsum Lorem Dolor Sit', phone: '+91 9876543210' },
  ]);

  const handleQuantityChange = (index, change) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + change); // Ensure quantity doesn't go below 1
    setQuantities(newQuantities);
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
        <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: moderateScale(90) }}>Order Details</Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: moderateScale(20), paddingBottom: moderateScale(80),height:'100%'}}>
        <View style={{ marginBottom: moderateScale(20) }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(20) }}>Cart Items</Text>
          {[0, 1].map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScale(20), borderBottomWidth: moderateScale(0.5), paddingBottom: moderateScaleVertical(30) }}>
              <Image source={require('./assets/lorem.jpg')} style={{ width: moderateScale(70), height: moderateScale(70), marginRight: moderateScale(10) }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Lorem Ipsum</Text>
                <Text style={{ fontSize: 16, color: 'rgba(150, 99, 23, 1)', fontWeight: '600', marginTop: moderateScale(10) }}>₹299</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  style={{ padding: moderateScale(5), borderColor: 'rgba(150, 99, 23, 1)', borderWidth: 1, borderRadius: 4 }}
                  onPress={() => handleQuantityChange(index, -1)}
                >
                  <Text style={{ color: '#000', fontSize: 20, fontWeight: '500' }}>-</Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: moderateScale(10) }}>{quantities[index]}</Text>
                <TouchableOpacity
                  style={{ padding: moderateScale(5), borderColor: 'rgba(90, 58, 137, 1)', borderWidth: 1, borderRadius: 4 }}
                  onPress={() => handleQuantityChange(index, 1)}
                >
                  <Text style={{ color: '#000', fontSize: 20, fontWeight: '500' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={{ backgroundColor: 'rgba(90, 58, 137, 1)', width: moderateScale(250), padding: moderateScale(15), borderRadius: 10, marginTop: moderateScaleVertical(20), alignSelf: 'center', position: 'absolute', bottom: 10 }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>Add Address</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={modalVisible} >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{ width: '100%', backgroundColor: '#FFF', padding: 20, borderRadius: 10 ,height:"70%",position:'absolute',bottom:moderateScaleVertical(0)}}>
            <ScrollView style={{ maxHeight: 200, marginBottom: 20 }}>
              {addresses.map((address) => (
                <View key={address.id} style={{ zIndex:100,marginBottom: 10,flexDirection:'row' ,gap:moderateScale(10),borderWidth:moderateScale(0.5) ,padding:moderateScale(10)}}>
                  <Image source={require('./assets/home.png')} style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: 'rgba(218, 152, 55, 1)' }} />
                  <View style={{gap:moderateScaleVertical(10)}}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{address.name}</Text>
                  <Text style={{ fontSize: 14, color: '#333' }}>{address.address}</Text>
                  <Text style={{ fontSize: 14, color: '#333' }}>{address.phone}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Add New Address</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Enter name"
              value={name}
              onChangeText={setname}
            />
            <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Enter address"
              value={newAddress}
              onChangeText={setNewAddress}
            />
             <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Enter phone"
              value={phone}
              onChangeText={setPhone}
            />
            <TouchableOpacity onPress={handleAddAddress} style={{ backgroundColor: 'rgba(90, 58, 137, 1)', padding: 15, borderRadius: 5, alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 10, alignItems: 'center' }}>
              <Text style={{ color: '#000', fontWeight: 'bold' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OrderDetails;
