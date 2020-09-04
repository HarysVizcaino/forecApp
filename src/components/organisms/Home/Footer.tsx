import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
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
    borderWidth: 1,
    flex: 1,
    borderColor: 'blue',
    justifyContent: 'space-between'
  }
})

export default HomeFooter;
