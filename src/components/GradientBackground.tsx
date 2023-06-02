import { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import useFade from '../hooks/useFade';
interface Props {
  children: JSX.Element | JSX.Element[];
}
const GradientBackground = ({ children }: Props) => {
  const { colors, prevColors: { primary: prevPrimary, secondary: prevSecondary }, setPrevMainColors } = useContext(GradientContext);
  const { primary, secondary } = colors;
  const { opacity, fadeIn, fadeOut } = useFade();
  useEffect(() => {
    fadeIn(() => { setPrevMainColors(colors); fadeOut(0); });
  }, [colors]);

  return (
    <View style={{
      flex: 1,
    }}>
      <LinearGradient
        colors={[prevPrimary, prevSecondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject, }}
        start={{ x: 0.1, y: 0.1 }} // Here's when the gradient starts
        end={{ x: 0.5, y: 0.7 }}
      />
      <Animated.View style={{
        ...StyleSheet.absoluteFillObject,
        opacity,
      }}>
        <LinearGradient
          colors={[primary, secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject, }}
          start={{ x: 0.1, y: 0.1 }} // Here's when the gradient starts
          end={{ x: 0.5, y: 0.7 }}
        />
      </Animated.View>
      {children}
    </View >
  );
};

export default GradientBackground;