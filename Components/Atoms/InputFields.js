import React from 'react';

import {View, TextInput, StyleSheet} from 'react-native';

const InputField = props => {
  console.log(props.inputStyles);
  return (
    <View style={styles.Container}>
      <TextInput placeholder={props.placeholder || 'your text here...'}
      style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#32DCDC',
    marginBottom: 10,
  },
  input: {
    width: '100%',
  }
});

export default InputField;
