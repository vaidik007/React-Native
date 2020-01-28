import React, {Component} from 'react';

import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import Buttonn from '../Components/Atoms/Button';
import Logo from '../Components/Atoms/Logo';
import InputBox from '../Components/Elements/InputBox';

class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="position">
        <SafeAreaView style={styles.Outline}>
          <View style={styles.FormContainer}>
            <View style={styles.Logocontainer}>
              <Logo />
            </View>
            <View style={styles.InputBoxStyle}>
              <InputBox />
              <Buttonn
                buttonPress={() => this.props.navigation.navigate('Tabs')}
                title="LOGIN"
              />
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  Logocontainer: {
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
  },

  InputBoxStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: 20,
  },
  FormContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  Outline: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
  },
});

export default App;
