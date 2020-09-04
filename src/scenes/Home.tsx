import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HomeBody from '../components/organisms/HomeBody';
import HomeFooter from '../components/organisms/HomeFooter';
import { Colors } from '../styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HomeBody />
      <HomeFooter />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DARK_GRAY,
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
  }
})

export default Home;
