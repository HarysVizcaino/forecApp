import React from 'react';
import { View, Text } from 'react-native';
import { CityAndDate } from '../molecules/CityAndDate';
import { DayWidget } from '../molecules/DayWidget';
import Measure from '../molecules/Measure';

const HomeBody = () => (
  <>
  <CityAndDate />
  <DayWidget />
  <Measure />
  </>
)

export default HomeBody;