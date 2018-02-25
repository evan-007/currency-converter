import React from 'react';
import color from 'color';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundModifier
  );
  const containerStyles = [styles.container];
  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default InputWithButton;
