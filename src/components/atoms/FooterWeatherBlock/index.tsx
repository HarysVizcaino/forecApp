import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

const FooterWeatherBlock = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HIII</Text>
      <Text style={styles.text}>SUNRISE</Text>
      <Text style={styles.text}>7:00</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center'
  },
  text: {
    color: Colors.WHITE,
    textAlign: 'center'
  }
})

export default FooterWeatherBlock;
