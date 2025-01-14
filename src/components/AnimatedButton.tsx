import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Animated} from 'react-native';

interface AnimatedButtonProps {
  onPress: () => void;
  icon: React.ReactNode;
  text: string;
  fadeAnim: Animated.Value;
  translateYAnim: Animated.Value;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onPress,
  icon,
  text,
  fadeAnim,
  translateYAnim,
}) => {
  return (
    <Animated.View
      style={{
        width: '100%',
        opacity: fadeAnim,
        transform: [{translateY: translateYAnim}],
      }}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        {icon}
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    width: '100%',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 2,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
});
