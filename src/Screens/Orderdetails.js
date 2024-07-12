import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

const OrderDetails = () => {
  const [quantities, setQuantities] = useState([1, 1]);

  const handleQuantityChange = (index, change) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + change); // Ensure quantity doesn't go below 1
    setQuantities(newQuantities);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <ScrollView contentContainerStyle={{ padding: moderateScale(20) }}>
        
        <View style={{ marginBottom: moderateScale(20) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScaleVertical(10) }}>
            <TouchableOpacity>
              <Image source={require('./assets/left-arrow.png')} style={{ height: moderateScaleVertical(20), width: moderateScale(30) }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: moderateScale(70) }}>Order Details</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: moderateScaleVertical(10) }}>Cart Items</Text>
          {[0, 1].map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScale(20) }}>
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
          <View style={{ borderWidth: 0.5, borderRadius: 10, padding: 10 }}>
            <Text style={{ marginBottom: moderateScaleVertical(5) }}>Expected delivery on 06-08-2024</Text>
          </View>
          <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 10, padding: 10, marginTop: moderateScaleVertical(10) }}>
            <Text style={{ marginBottom: moderateScaleVertical(5), fontSize: 17, fontWeight: '600' }}>Home</Text>
            <Text style={{ marginBottom: moderateScaleVertical(5) }}>301, JSR Enclave, Danvaipetapuram</Text>
            <Text>Lorem Ipsum Lorem Dolor Sit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 10, padding: 10, marginTop: moderateScaleVertical(10) }}>
            <Text style={{ marginBottom: moderateScaleVertical(5), fontSize: 17, fontWeight: '600' }}>Riya</Text>
            <Text>+91 1234567891</Text>
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
            <Text style={{ fontSize: 17, fontWeight: '600', marginTop: moderateScaleVertical(10) }}>₹{quantities.reduce((total, qty) => total + qty * 299, 0) + 70 + 70 + 500}</Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#FFF', padding: moderateScale(20), borderRadius: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: moderateScaleVertical(10) }}>Payment</Text>
          <View style={{ flexDirection: 'row', marginBottom: moderateScaleVertical(30) }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: moderateScale(20) }}>
              <View style={{ width: moderateScale(20), height: moderateScale(20), borderRadius: moderateScale(10), borderWidth: 1, borderColor: 'rgba(255, 218, 184, 1)', marginRight: moderateScale(5), backgroundColor: 'rgba(218, 152, 55, 1)' }} />
              <Text>Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: moderateScale(20), height: moderateScale(20), borderRadius: moderateScale(10), borderWidth: 1, borderColor: 'rgba(218, 152, 55, 1)', marginRight: moderateScale(5) }} />
              <Text>UPI</Text>
            </TouchableOpacity>
          </View>
          <TextInput placeholder="Enter name" style={{ borderBottomWidth: 1, borderBottomColor: '#CCC', marginBottom: moderateScaleVertical(30) }} />
          <TextInput placeholder="Card number" style={{ borderBottomWidth: 1, borderBottomColor: '#CCC', marginBottom: moderateScaleVertical(30) }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput placeholder="MM/YY" style={{ borderBottomWidth: 1, borderBottomColor: '#CCC', marginBottom: moderateScaleVertical(30), flex: 0.48 }} />
            <TextInput placeholder="CVV" style={{ borderBottomWidth: 1, borderBottomColor: '#CCC', marginBottom: moderateScaleVertical(30), flex: 0.48 }} />
          </View>
        </View>

        <TouchableOpacity style={{ backgroundColor: 'rgba(90, 58, 137, 1)', width: moderateScale(250), padding: moderateScale(15), borderRadius: 10, marginTop: moderateScaleVertical(20), alignSelf: 'center' }}>
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>Make Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;