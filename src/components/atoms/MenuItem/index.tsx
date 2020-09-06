import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TOUCHABLE_AREA } from '../../../contants';
import { Colors, Typographic } from '../../../styles';

interface IProp {
  label: string;
}
const MenuItem = ({ label }: IProp) => (
  <TouchableOpacity hitSlop={TOUCHABLE_AREA} style={styles.container}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.DARK_GRAY,
    backgroundColor: Colors.DARK_GRAY,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  text: {
    color: Colors.WHITE,
    fontSize: Typographic.FONT_SIZE_22
  }
})


export default MenuItem;
