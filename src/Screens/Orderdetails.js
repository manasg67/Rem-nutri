import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Image, Modal } from 'react-native';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

const OrderDetails = () => {
  const [quantities, setQuantities] = useState([1, 1]);
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneModalVisible, setPhoneModalVisible] = useState(false);
  const [name, setName] = useState('Riya');
  const [phone, setPhone] = useState('+91 1234567891');
  const [address, setAddress] = useState('301, JSR Enclave, Danvaipetapuram');
  const [description, setDescription] = useState('Lorem Ipsum Lorem Dolor Sit');

  const handleQuantityChange = (index, change) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + change); // Ensure quantity doesn't go below 1
    setQuantities(newQuantities);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScaleVertical(10), margin: moderateScaleVertical(10) }}>
        <TouchableOpacity>
          <Image source={require('./assets/left-arrow.png')} style={{ height: moderateScaleVertical(20), width: moderateScale(30) }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: moderateScale(90) }}>Order Details</Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: moderateScale(20) }}>
        <View style={{ marginBottom: moderateScale(20) }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: moderateScaleVertical(10) }}>Cart Items</Text>
          {[0, 1].map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScale(20), borderBottomWidth: moderateScale(0.5), paddingBottom: moderateScaleVertical(30) }}>
              <Image source={require('./assets/lorem.jpg')} style={{ width: moderateScale(70), height: moderateScale(70), marginRight: moderateScale(10) }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Lorem Ipsum</Text>
                <Text style={{ fontSize: 16, color: 'rgba(252, 180, 75, 1)', fontWeight: '600', marginTop: moderateScale(10) }}>₹299</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  style={{ padding: moderateScale(5), borderColor: 'rgba(252, 180, 75, 1)', borderWidth: 1, borderRadius: 4 }}
                  onPress={() => handleQuantityChange(index, -1)}
                >
                  <Text style={{ color: '#000', fontSize: 20, fontWeight: '500' }}>-</Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: moderateScale(10) }}>{quantities[index]}</Text>
                <TouchableOpacity
                  style={{ padding: moderateScale(5), borderColor: 'rgba(252, 180, 75, 1)', borderWidth: 1, borderRadius: 4 }}
                  onPress={() => handleQuantityChange(index, 1)}
                >
                  <Text style={{ color: '#000', fontSize: 20, fontWeight: '500' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={{ backgroundColor: '#FFF', padding: moderateScale(20), borderRadius: 10, marginBottom: moderateScale(20) }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: moderateScaleVertical(10) }}>Delivery Details</Text>
          <View style={{ borderWidth: 0.5, borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('./assets/fast-delivery.png')} style={{ height: moderateScaleVertical(40), width: moderateScale(30), tintColor: 'rgba(218, 152, 55, 1)' }} />
            <Text style={{ marginLeft: moderateScale(20), marginBottom: moderateScaleVertical(5), fontSize: 15, fontWeight: '500' }}>Expected delivery on 06-08-2024</Text>
          </View>

          <TouchableOpacity
            style={{ borderWidth: moderateScale(0.5), alignItems: 'center', borderRadius: 10, padding: 10, marginTop: moderateScaleVertical(20), flexDirection: 'row', height: moderateScaleVertical(80), width: '100%' }}
            onPress={() => setModalVisible(true)}
          >
            <Image source={require('./assets/home.png')} style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: 'rgba(218, 152, 55, 1)' }} />
            <View style={{ marginLeft: moderateScale(20) }}>
              <Text style={{ marginBottom: 5, fontSize: 17, fontWeight: '600' }}>Home</Text>
              <Text>{address}</Text>
              <Text>{description}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ borderWidth: moderateScale(0.5), alignItems: 'center', borderRadius: 10, padding: 10, marginTop: moderateScaleVertical(20), flexDirection: 'row', height: moderateScaleVertical(70), width: '100%' }}
            onPress={() => setPhoneModalVisible(true)}>
            <Image source={require('./assets/phone.png')} style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: 'rgba(218, 152, 55, 1)' }} />
            <View style={{ marginLeft: moderateScale(20) }}>
              <Text style={{ marginBottom: moderateScaleVertical(5), fontSize: 17, fontWeight: '600' }}>{name}</Text>
              <Text>{phone}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: '#FFF', padding: moderateScale(20), borderRadius: 10, marginBottom: moderateScale(20) }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: moderateScaleVertical(10) }}>Billing Details</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: moderateScaleVertical(10) }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Item Total</Text>
            <Text>₹{quantities.reduce((total, qty) => total + qty * 299, 0)}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: moderateScaleVertical(10) }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Delivery Fee</Text>
            <Text>₹70</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: moderateScaleVertical(10) }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Tax</Text>
            <Text>₹70</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: moderateScaleVertical(10) }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Lorem Ipsum</Text>
            <Text>₹500</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(15), fontWeight: 'bold', borderTopWidth: 1, borderColor: 'rgba(255, 218, 184, 1)' }}>
            <Text style={{ fontSize: 17, fontWeight: '600', marginTop: moderateScaleVertical(10) }}>Total Amount</Text>
            <Text style={{ fontSize: 17, fontWeight: '600', marginTop: moderateScaleVertical(10) }}>₹{quantities.reduce((total, qty) => total + qty * 299, 0) + 70 + 70}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: moderateScale(20), backgroundColor: '#FFF', borderTopWidth: 1, borderColor: '#F5F5F5' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>₹{quantities.reduce((total, qty) => total + qty * 299, 0) + 70 + 70}</Text>
        <TouchableOpacity style={{ backgroundColor: 'rgba(218, 152, 55, 1)', padding: moderateScale(10), borderRadius: 5 }}>
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Checkout</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: '#FFF', padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Update Address</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Enter address"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Enter description"
              value={description}
              onChangeText={setDescription}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ backgroundColor: 'rgba(218, 152, 55, 1)', padding: 15, borderRadius: 5, alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={phoneModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: '#FFF', padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Update Phone</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Enter name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={{ borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 20 }}
              placeholder="Enter phone"
              value={phone}
              onChangeText={setPhone}
            />
            <TouchableOpacity onPress={() => setPhoneModalVisible(false)} style={{ backgroundColor: 'rgba(218, 152, 55, 1)', padding: 15, borderRadius: 5, alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OrderDetails;
