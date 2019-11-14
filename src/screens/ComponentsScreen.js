import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

  const name = "Tyson"
  return (<View>
    <Text style={styles.textStyle}>Getting stared with react native!</Text>
    <Text style={styles.subHeading}>My name is {name}</Text>
  </View>);
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeading: {
    fontSize: 20
  }
});

export default ComponentsScreen;