import React from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from '../../styles';
import ModalBody from '../molecules/ModalBody';
import ModalHeader from '../molecules/ModalHeader';

const MenuModal = () => {
  return (
    <Modal isVisible >
      <View style={styles.container}>
      <SafeAreaView />
      <ModalHeader/>
      <ModalBody />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'column',
  }
})

export default MenuModal;
