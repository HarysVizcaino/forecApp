import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TOUCHABLE_AREA } from '../../../contants';

interface IProp {
  label: string;
}
const MenuItem = ({ label }: IProp) => (
  <TouchableOpacity hitSlop={TOUCHABLE_AREA}>
    <Text>{label}</Text>
  </TouchableOpacity>
)

export default MenuItem;
