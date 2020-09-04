import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CityAndDate } from '../../molecules/CityAndDate';
import { DayWidget } from '../../molecules/DayWidget';
import Measure from '../../molecules/Measure';

const HomeBody = () => (
  <View style={styles.container}>
  <CityAndDate />
  <DayWidget />
  <Measure />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 7,
  }
})

export default HomeBody;