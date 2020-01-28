import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import FormInputField from '../Molecules/FormInputFIeld';

class InputBox extends Component {
  render() {
    return (
      <View style={styles.inputBox}>
        <FormInputField Input="USERNAME" placeholder="USERNAME" />
        <FormInputField Input="PASSWORD" placeholder="PASSWORD" />
      </View>
    );
  }
}

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    width: '100%'
  }
})