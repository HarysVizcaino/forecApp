import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../atoms/Title';
import SubTitle from '../atoms/SubTitle';
import { Typographic } from '../../styles';

const Measure = () => (
  <View style={styles.container}>
    <Title label="22 C" size={Typographic.FONT_SIZE_60} />
    <SubTitle label="GOOD MORNING" size={Typographic.FONT_SIZE_16} />
    <SubTitle label="Harys" size={Typographic.FONT_SIZE_18} />

  </View>
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Measure;
