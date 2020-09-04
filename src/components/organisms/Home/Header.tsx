import React from 'react';
import { View, StyleSheet} from 'react-native';
import HeaderMenu from '../../atoms/HeaderMenu';

const HeaderHome = () => (
  <View style={styles.container}>
   <HeaderMenu />
  </View>
)

const styles =StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'red',
    flex: 1
  }
})

export default HeaderHome;
