import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

const Logo = props => {
  return (
    <View>
      <View>
        <Image
          source={require('./react-dev-tools-logo.webp')}
          style={styles.Logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Logo;
