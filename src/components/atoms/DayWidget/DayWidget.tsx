import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native';
import { MOON_IMAGE } from '../../../contants';

const DayWidget = () => (
  <View>
    <Image source={require('../../../assets/images/moon.png')} />
  </View>  
)

export default DayWidget;
