import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Buttonn from '../Components/Atoms/Button';

class SignOut extends Component {
  render() {
    return (
    <View>
        <Text>SIGNOUT SCREEN</Text>
        <Buttonn title="Press For Login Screen" />
    </View>
    )
  }
}

export default SignOut;
