import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typographic } from '../../../styles';

interface IProps {
  Icon: () => React.ReactChild;
  label: string;
  value: string;
}

const FooterWeatherBlock = ({ Icon, label, value }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 5 }}>
      {Icon()}
      </View>
  <Text style={styles.textParagraph}>{label}</Text>
      <Text style={styles.textNumber}>{value}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textParagraph: {
    color: Colors.WHITE,
    fontSize: Typographic.FONT_SIZE_11
  },
  textNumber: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: Typographic.FONT_SIZE_24,
    fontWeight: '300'
  }
})

export default FooterWeatherBlock;
