import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DayWidget as DayWidgetAtom } from '../atoms/DayWidget';

export const DayWidget = () => (
  <View style={styles.container}>
    <DayWidgetAtom />
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})