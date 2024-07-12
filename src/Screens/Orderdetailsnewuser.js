// import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';
import { useState } from 'react';

const OrderDetails = () => {
  const [quantities, setQuantities] = useState([1, 1]);

  const handleQuantityChange = (index, change) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + change); // Ensure quantity doesn't go below 1
    setQuantities(newQuantities);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
       <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScaleVertical(10),margin:moderateScaleVertical(10) }}>
            <TouchableOpacity>
              <Image source={require('./assets/left-arrow.png')} style={{ height: moderateScaleVertical(20), width: moderateScale(30) }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: moderateScale(90) }}>Order Details</Text>
          </View>
      <ScrollView contentContainerStyle={{ padding: moderateScale(20),height:'100%' }}>
        
        <View style={{ marginBottom: moderateScale(20) }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: moderateScaleVertical(10),marginTop:moderateScaleVertical(20) }}>Cart Items</Text>
          {[0, 1].map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScale(20),borderBottomWidth:moderateScale(0.5),paddingBottom:moderateScaleVertical(30)}}>
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
                  style={{ padding: moderateScale(5), borderColor: 'rgba(150, 99, 23, 1)', borderWidth: 1, borderRadius: 4 }}
                  onPress={() => handleQuantityChange(index, 1)}
                >
                  <Text style={{ color: '#000', fontSize: 20, fontWeight: '500' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={{ backgroundColor: 'rgba(90, 58, 137, 1)', width: moderateScale(250), padding: moderateScale(15), borderRadius: 10, marginTop: moderateScaleVertical(20), alignSelf: 'center',position:'absolute',bottom:10 }}>
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>Add Address</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;