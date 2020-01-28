import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Buttonn from '../Components/Atoms/Button';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>HOMESCREEN</Text>
        <Buttonn
          title="SignOut"
          buttonPress={() => this.props.navigation.navigate('OUT')}
        />
      </View>
    );
  }
}

export default HomeScreen;
