import React from 'react';
import { View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DayWidget as DayWidgetAtom } from '../atoms/DayWidget';

export const DayWidget = () => (
  <View style={styles.container}>
    <DayWidgetAtom />
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(10)
  }
})