import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: moderateScaleVertical(50), marginTop: moderateScaleVertical(30), paddingLeft: 20 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: 'row', alignItems: 'center' }}
        >
          {['All', 'Protein shakes', 'Powders', 'Diabetic content'].map((category, index) => (
            <TouchableOpacity
              key={index}
              style={{
                borderWidth: 1,
                borderRadius: 3,
                height: moderateScaleVertical(33),
                borderColor: 'black',
                padding: 8,
                marginRight: 10,
                width: category === 'All' ? 'auto' : 'auto',
                padding: category === 'All' ? 5 : 5,
              }}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: '600',
                  fontSize: 16,
                  fontFamily: 'Hanken Grotesk',
                  color: 'rgba(64, 37, 103, 1)',
                }}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={{ marginTop: moderateScaleVertical(20), paddingHorizontal: 20, paddingVertical: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontWeight: '600', fontSize: 20, fontFamily: 'Hanken Grotesk' }}>Health Powders</Text>

          {[1, 2, 3, 4].map((item, index) => (
            <View key={index} style={{ marginTop: moderateScaleVertical(20), flexDirection: 'row', justifyContent: 'space-between' }}>
              {[1, 2].map((subItem, subIndex) => (
                <View key={subIndex}>
                  <Image source={require('./assets/protinpowder.jpg')} style={{ height: moderateScaleVertical(170) }} />
                  <Text style={{ fontWeight: '600', fontSize: 20, marginTop: moderateScaleVertical(10) }}>Name</Text>
                  <Text style={{ fontSize: 16, marginTop: moderateScaleVertical(5) }}>Description</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(30) }}>
                    <Text style={{ color: 'rgba(184, 124, 37, 1)', fontSize: 17, fontWeight: '600', marginTop: moderateScaleVertical(5) }}>$XXX</Text>
                    <TouchableOpacity
                      style={{
                        borderWidth: moderateScale(1),
                        height: moderateScaleVertical(30),
                        width: moderateScale(90),
                        borderRadius: 6,
                        borderColor: 'rgba(252, 180, 75, 1)',
                      }}
                    >
                      <Text style={{ fontSize: 17, fontWeight: '600', alignSelf: 'center', paddingTop: moderateScaleVertical(4) }}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
