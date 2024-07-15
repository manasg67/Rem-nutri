import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
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
      <View style={{ marginRight: moderateScale(5), marginLeft: moderateScale(5),marginBottom:moderateScaleVertical(150),backgroundColor:'#ffff' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(10) }}>
          <TouchableOpacity>
            <Image source={require('./assets/left-arrow.png')} style={{ height: moderateScaleVertical(20), width: moderateScale(30) }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: moderateScale(90) }}>Track Order</Text>
        </View>
        {/* order status start */}
        <View style={{ alignItems: 'center', padding: moderateScale(20), }}>
          <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: moderateScaleVertical(20) }}>
            Status line, your order has been accepted
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' ,width:'100%',height:moderateScaleVertical(60),marginLeft:moderateScale(20)}}>
            <View style={{ alignItems: 'center',marginRight:moderateScale(10),position:'absolute',left:0}}>
              <View style={{
                width: moderateScale(30),
                height: moderateScale(30),
                borderRadius: moderateScale(20),
                backgroundColor: '#F9A602',
                borderColor:'rgba(242, 219, 255, 1)',
                borderWidth:3,
              }} />
              <Text style={{ fontSize: 14, fontWeight: '300', color: 'black', marginTop: moderateScaleVertical(10) }}>
                Order 
              </Text>
              <Text style={{ fontSize: 14, fontWeight: '300', color: 'black' }}>
              Accepted
              </Text>
              
            </View>
            <View style={{ width: moderateScale(96), height: moderateScale(4), backgroundColor: 'rgba(242, 219, 255, 1)',marginBottom:moderateScaleVertical(45),marginLeft:moderateScale(43),marginRight:moderateScale(-19)}} />
            <View style={{alignItems:'center',marginHorizontal:moderateScale(10)}}>
              <View style={{
                width: moderateScale(30),
                height: moderateScale(30),
                borderRadius: moderateScale(20),
                backgroundColor: 'rgba(156, 86, 195, 1)',
                borderWidth: 3,
                borderColor: 'rgba(242, 219, 255, 1)'
              }} />
              <Text style={{ fontSize: 14, fontWeight: '300', color: 'black', marginTop: moderateScaleVertical(10) }}>
              Lorem 
              </Text>
              <Text style={{ fontSize: 14, fontWeight: '300', color: 'black' }}>
              Ipsum 
              </Text>
              
            </View>
            <View style={{ width: moderateScale(100), height: moderateScale(4), backgroundColor: 'rgba(242, 219, 255, 1)',marginBottom:moderateScaleVertical(45),marginLeft:moderateScale(-15),marginRight:moderateScale(-19)}} />
            <View style={{alignItems:"center"}}>
              <View style={{
                width: moderateScale(30),
                height: moderateScale(30),
                borderRadius: moderateScale(20),
                backgroundColor: 'rgba(156, 86, 195, 1)',
                borderWidth: 3,
                borderColor: 'rgba(242, 219, 255, 1)'
              }} />
              <Text style={{ fontSize: 14, fontWeight: '300', color: 'black', marginTop: moderateScaleVertical(10) }}>
              Out for 
              </Text>
              <Text style={{ fontSize: 14, fontWeight: '300', color: 'black' }}>
              Delievery
              </Text>
              
            </View>
          </View>
          
        </View>
        {/* order status end */}
        <ScrollView  showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: moderateScale(20),marginLeft:moderateScale(20)}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: moderateScaleVertical(15) }}>Cart Items</Text>
            <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:'row',gap:moderateScale(20)}}>
            {[0,1,2].map((item, index) => (
            
              <View key={index} style={{ flexDirection: 'column', alignItems: 'center', marginBottom: moderateScale(20), borderWidth: moderateScale(0.5),borderColor:'rgba(218, 152, 55, 1)',width:moderateScale(124),height:moderateScaleVertical(140),borderRadius:moderateScale(12)}}>
                <Image source={require('./assets/lorem.jpg')} style={{ width: moderateScale(70), height: moderateScale(70), marginRight: moderateScale(10),marginTop:moderateScaleVertical(10) }} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Lorem Ipsum</Text>
                  <Text style={{ fontSize: 16, color: 'rgba(252, 180, 75, 1)', fontWeight: '600', marginTop: moderateScale(10) }}>₹299</Text>
                </View>
              </View>
              
            ))}
            </View>
            </ScrollView>
          </View>

          <View style={{ backgroundColor: '#FFF', padding: moderateScale(20), borderRadius: moderateScale(10), marginBottom: moderateScale(20) }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: moderateScaleVertical(10) }}>Delivery Details</Text>
            <View style={{borderWidth:0.5 ,padding:10,borderRadius:12,borderColor:'rgba(184, 184, 184, 1)'}}>
            <View style={{ borderBottomWidth: moderateScale(1), borderRadius: moderateScale(10), padding: moderateScale(10), flexDirection: 'row', alignItems: 'center' ,borderColor:'rgba(184, 184, 184, 1)'}}>
              <Image source={require('./assets/fast-delivery.png')} style={{ height: moderateScaleVertical(40), width: moderateScale(30), tintColor: 'rgba(218, 152, 55, 1)' }} />
              <Text style={{ marginLeft: moderateScale(20), marginBottom: moderateScaleVertical(5), fontSize: 15, fontWeight: '500' }}>Expected delivery on 06-08-2024</Text>
            </View>

            <View
              style={{  borderBottomWidth: moderateScale(1), alignItems: 'center', borderRadius: moderateScale(10), padding: moderateScale(10), marginTop: moderateScaleVertical(20), flexDirection: 'row', height: moderateScaleVertical(80), width: '100%' ,borderColor:'rgba(184, 184, 184, 1)' }}
            >
              <Image source={require('./assets/home.png')} style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: 'rgba(218, 152, 55, 1)' }} />
              <View style={{ marginLeft: moderateScale(20) }}>
                <Text style={{ marginBottom: moderateScaleVertical(5), fontSize: 17, fontWeight: '600' }}>Home</Text>
                <Text>301, JSR Enclave, Danvaipetapuram</Text>
                <Text>Lorem Ipsum Lorem Dolor Sit</Text>
              </View>
            </View>
            <View style={{ alignItems: 'center', borderRadius: moderateScale(10), padding: moderateScale(10), marginTop: moderateScaleVertical(10), flexDirection: 'row', height: moderateScaleVertical(70), width: '100%' }}>
              <Image source={require('./assets/phone.png')} style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: 'rgba(218, 152, 55, 1)' }} />
              <View style={{ marginLeft: moderateScale(20) }}>
                <Text style={{ marginBottom: moderateScaleVertical(5), fontSize: 17, fontWeight: '600' }}>Riya</Text>
                <Text>+91 1234567891</Text>
              </View>
            </View>
            </View>
          </View>

          <View style={{ backgroundColor: '#FFF', padding: moderateScale(20), borderRadius: moderateScale(10), marginBottom: moderateScale(20) }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: moderateScaleVertical(10) }}>Billing Details</Text>
            <View style={{borderWidth:moderateScale(0.5),padding:moderateScale(10),gap:moderateScaleVertical(10),borderRadius:moderateScale(8),borderColor:'rgba(184, 184, 184, 1)'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScaleVertical(10),  }}>
              <Text style={{ fontSize: 16 }}>Item Total</Text>
              <Text style={{ marginLeft: 'auto', fontSize: 16 }}>₹299</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScaleVertical(10) }}>
              <Text style={{ fontSize: 16 }}>Delievery Fee</Text>
              <Text style={{ marginLeft: 'auto', fontSize: 16 }}>₹299</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScaleVertical(10) }}>
              <Text style={{ fontSize: 16 }}>Tax</Text>
              <Text style={{ marginLeft: 'auto', fontSize: 16 }}>₹299</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScaleVertical(10), borderBottomWidth: moderateScale(1),paddingBottom:moderateScaleVertical(10),borderColor:'rgba(255, 218, 184, 1)' }}>
              <Text style={{ fontSize: 16 }}>Lorem Ipsum</Text>
              <Text style={{ marginLeft: 'auto', fontSize: 16 }}>₹0</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScaleVertical(10)}}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>Total Amount</Text>
              <Text style={{ marginLeft: 'auto', fontSize: 16, fontWeight: '600' }}>₹299</Text>
            </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetails;
