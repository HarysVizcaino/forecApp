import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HomeBody from '../components/organisms/Home/Body';
import HomeFooter from '../components/organisms/Home/Footer';
import HeaderHome from '../components/organisms/Home/Header';
import { Colors } from '../styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderHome />
      <HomeBody />
      <HomeFooter />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: Colors.DARK_GRAY,
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
  }
})

export default Home;
