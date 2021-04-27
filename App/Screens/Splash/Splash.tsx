import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import styles from './style';

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#283747" barStyle="light-content" />
      <Image
        style={styles.imageContainer}
        source={require('/Users/karry/ReacNativeApp/App/components/image/react.png')}
      />
    </View>
  );
};

export default Splash;
