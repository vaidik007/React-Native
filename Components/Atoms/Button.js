import React from 'react';
import {View, Button} from 'react-native';

const Buttonn = props => {
  return (
    <View>
      <Button
        title={props.title || 'SUBMIT'}
        onPress={() => props.buttonPress()}
      />
    </View>
  );
};

export default Buttonn;
