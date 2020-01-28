import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputField from '../Atoms/InputFields';
import Label from '../Atoms/Labels';

const FormInputField = props => {
  console.log(props.Input);
  return (
    <View>
      <View style={styles.InputFieldStyle}>
        <Label Input={props.Input} />
        <InputField
          placeholder={props.placeholder}
          inputStyles={props.inputField}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InputFieldStyle: {
    width: "100%"
  },
  inputField: {
    width: '100%',
    flex:1,
    
  }
});

export default FormInputField;
