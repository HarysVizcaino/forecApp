import React from 'react';
import { View, StyleSheet} from 'react-native';
import  Title from '../atoms/Title/';
import SubTitle from '../atoms/SubTitle/';

export const CityAndDate = () => (
    <View style={styles.container}>
    <Title label="Santo Domingo" size={20}/>
    <SubTitle label="MONDAY 7:30 PM" size={14} />
    </View>
  );

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})