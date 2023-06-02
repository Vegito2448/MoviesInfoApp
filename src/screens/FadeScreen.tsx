import React from 'react';
import { Animated, Button, View } from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
  const {
    opacity,
    fadeIn,
    fadeOut
  } = useFade();


  return (
    <View style={{ flex: 1, backgroundColor: '#f6f986', justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={{
        backgroundColor: 'blueviolet',
        width: 150,
        height: 150,
        borderColor: 'white',
        borderWidth: 10,
        marginBottom: 10,
        opacity,
      }}>

      </Animated.View>

      <Button title='FadeIn' onPress={() => fadeIn()} />
      <Button title='FadeOut' onPress={() => fadeOut()} />
    </View>
  );
};

export default FadeScreen;