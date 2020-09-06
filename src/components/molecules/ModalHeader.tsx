import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Colors, Typographic } from '../../styles';

const ModalHeader = () => (
  <View style={styles.container}>
    <TouchableOpacity>
    <FontAwesomeIcon icon={ faTimes } size={25} color={Colors.WHITE} />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    paddingLeft: 8,
    paddingTop: 8,
  }
})

export default ModalHeader;
