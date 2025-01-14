import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors } from '../constants/Colors';
import { DIMENSIONS } from '../constants/Dimensions';

interface InputFieldProps extends TextInputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?:
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'visible-password'
  | string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={styles.inputContainer}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    width: DIMENSIONS.WIDTH * 0.9,
    height: DIMENSIONS.HEIGHT * 0.07,
    marginVertical: 12,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    letterSpacing: 1.3,
    fontWeight: '600',
  },
});
