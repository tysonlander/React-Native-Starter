import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetails'

const ImageScreen = () => {
  return <View>
    {/* when we create a component the prop can be called anything we want */}
    <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore="9" />
    <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore="200" />
    <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore="5" />
  </View>
};

const styles = StyleSheet.create({})

export default ImageScreen;