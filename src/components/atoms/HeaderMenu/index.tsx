import React from 'react';
import { View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../../styles';
import { TOUCHABLE_AREA } from '../../../contants';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSun, faTemperatureLow, faWater, faEllipsisV,  faSearch  } from '@fortawesome/free-solid-svg-icons'

const HeaderMenu = () => (
  <TouchableOpacity hitSlop={TOUCHABLE_AREA}>
   <FontAwesomeIcon size={25} icon={ faEllipsisV } color={Colors.WHITE} />
  </TouchableOpacity>
)

export default HeaderMenu;
