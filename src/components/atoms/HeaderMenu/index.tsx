import React from 'react';
import { View, Text} from 'react-native';
import { Colors } from '../../../styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSun, faTemperatureLow, faWater, faEllipsisV  } from '@fortawesome/free-solid-svg-icons'

const HeaderMenu = () => (
  <View>
   <FontAwesomeIcon size={25} icon={ faEllipsisV } color={Colors.WHITE} />
  </View>
)

export default HeaderMenu;
