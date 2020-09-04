import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typographic } from '../../../styles';

const FooterWeatherBlock = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textNumber}>HIII</Text>
      <Text style={styles.textParagraph}>SUNSET</Text>
      <Text style={styles.textNumber}>7:00</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textParagraph: {
    color: Colors.WHITE,
    fontSize: Typographic.FONT_SIZE_11
  },
  textNumber: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: Typographic.FONT_SIZE_16
  }
})

export default FooterWeatherBlock;
