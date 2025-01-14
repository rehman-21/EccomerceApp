import React from 'react';
import {Text, StyleSheet, Animated} from 'react-native';

interface AnimatedTextProps {
  text: string;
  fadeAnim: Animated.Value;
  translateXAnim: Animated.Value;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  fadeAnim,
  translateXAnim,
}) => {
  return (
    <Animated.Text
      style={[
        styles.text,
        {
          opacity: fadeAnim,
          transform: [{translateX: translateXAnim}],
        },
      ]}>
      {text}
    </Animated.Text>
  );
};

export default AnimatedText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#777',
    lineHeight: 30,
    marginBottom: 20,
    letterSpacing: 1.2,
  },
});
