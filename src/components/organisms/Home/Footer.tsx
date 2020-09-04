import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FooterWeatherBlock from '../../atoms/FooterWeatherBlock';

const HomeFooter = () => {
  return (
    <View style={styles.container}>
      <FooterWeatherBlock />
      <FooterWeatherBlock />
      <FooterWeatherBlock />
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
