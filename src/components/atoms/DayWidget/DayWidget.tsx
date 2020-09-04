import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { MOON_IMAGE } from '../../../contants';

const DayWidget = () => (
  <View style={styles.container}>
    <Image source={require('../../../assets/images/moon.png')} style={styles.image} />
  </View>  
)

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 230,
    height: 150
  }
})

export default DayWidget;
