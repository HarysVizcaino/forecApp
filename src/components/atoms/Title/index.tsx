import React from 'react';
import { View, Text } from 'react-native';
import { Colors, Typographic } from '../../../styles';

interface Ititle {
  color?: string;
  label: string;
  size?: number;
}
const Title = (
  {
    color,
    label,
    size,
  }: Ititle
) => (
    <View>
      <Text style={{ color, fontSize: size }}>{ label }</Text>
    </View>
  );
Title.defaultProps = {
  color: Colors.WHITE,
  size: Typographic.FONT_SIZE_16,
}


export default Title;
