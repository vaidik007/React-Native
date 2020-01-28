import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Buttonn from '../Components/Atoms/Button';
import {DrawerActions} from 'react-navigation-drawer';


class ScreenThree extends Component {
  open = navigation => {
    console.log('NAVS:', DrawerActions);
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };
  render() {
    return (
      <View >
        <Text>SCREEN 3</Text>
        <Buttonn
          buttonPress={() => this.open(this.props.navigation)}
          title="Drawer Open"
        />
      </View>
    );
  }
}


export default ScreenThree;
