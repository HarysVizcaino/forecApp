import React from 'react';
import { View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import MenuItem from '../atoms/MenuItem';

const MenuModal = () => {
  return (
    <View style={styles.container}>
      <MenuItem label="Search City" />
      <MenuItem label="Map" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 9
  }
})

export default MenuModal;
