import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Colors, Typographic } from '../../../styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faTemperatureLow, faWater  } from '@fortawesome/free-solid-svg-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FooterWeatherBlock from '../../atoms/FooterWeatherBlock';

const ICON_SIZE = 30;

const HomeFooter = () => {
  return (
    <View style={styles.container}>
      
      <FooterWeatherBlock 
      Icon={() => <FontAwesomeIcon icon={ faSun } size={ICON_SIZE} color={Colors.WHITE} />} 
      label="SUNSET"
      value="7:00"
      />
      <FooterWeatherBlock 
      Icon={() => <FontAwesomeIcon icon={ faTemperatureLow } size={ICON_SIZE} color={Colors.WHITE}  />} 
      label="WIND"
      value="4m/s"
      />
      <FooterWeatherBlock 
      Icon={() => <FontAwesomeIcon icon={ faWater } size={ICON_SIZE} color={Colors.WHITE} />}
      label="TEMPRATURE"
      value="23"
       />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: hp(5)
  }
})

export default HomeFooter;
