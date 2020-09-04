import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet} from 'react-native';
import { Typographic } from '../../styles';
import  Title from '../atoms/Title/';
import SubTitle from '../atoms/SubTitle/';

export const CityAndDate = () => (
    <View style={styles.container}>
    <Title label="Santo Domingo" size={Typographic.FONT_SIZE_28}/>
    <SubTitle label="MONDAY 7:30 PM" size={Typographic.FONT_SIZE_14} />
    </View>
  );

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(5)
  }
})