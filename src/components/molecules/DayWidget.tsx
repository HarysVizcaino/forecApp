import React from 'react';
import { View, Text } from 'react-native';
import { DayWidget as DayWidgetAtom } from '../atoms/DayWidget';

export const DayWidget = () => (
  <View>
    <DayWidgetAtom />
  </View>
)
