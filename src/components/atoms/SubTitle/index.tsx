import React from 'react';
import { View, Text } from 'react-native';
import { Colors, Typographic } from '../../../styles';

interface ISubTitle {
  color?: string;
  label: string;
  size?: number;
}
const SubTitle = (
  {
    color,
    label,
    size,
  }: ISubTitle
) => (
    <View>
      <Text style={{ color, fontSize: size }}>{ label }</Text>
    </View>
  );
  SubTitle.defaultProps = {
  color: Colors.WHITE,
  size: Typographic.FONT_SIZE_16,
}


export default SubTitle;
