import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return <View style={styles.ViewStyle}>
    <View style={styles.box1}></View>
    <View style={styles.box2}></View>
    <View style={styles.box3}></View>
  </View>
};

const styles = StyleSheet.create({
  ViewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  box1: {
    backgroundColor: 'red',
    borderWidth: 3,
    borderColor: 'red',
    height: 30,
    width: 30
  },
  box2: {
    backgroundColor: 'green',
    borderWidth: 3,
    borderColor: 'green',
    height: 30,
    width: 30,
    alignSelf: "flex-end"
  },
  box3: {
    backgroundColor: 'purple',
    borderWidth: 3,
    borderColor: 'purple',
    height: 30,
    width: 30
  }
})

export default BoxScreen;