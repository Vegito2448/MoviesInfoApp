import { useRef } from 'react';
import { Animated } from 'react-native';

const useFade = () => {
  const { current: opacity } = useRef(new Animated.Value(0));

  const fadeIn = (callback?: Function) =>
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }
    ).start(() => callback ? callback() : null);

  const fadeOut = (duration: number = 350) =>
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }
    ).start();
  return (
    {
      opacity,
      fadeIn,
      fadeOut
    }
  );
};

export default useFade;