import React from 'react';
import styles from './style';

import {View, Text, Image} from 'react-native';
interface HomeDetailprops {}
const HomeDetail: React.FC<HomeDetailprops> = ({item}) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.titleheader}>
        <Text style={styles.id}>{item.id}</Text>
        <Text style={styles.title}>{item.login}</Text>
      </View>

      <Image style={styles.image} source={{uri: item.avatar_url}} />
    </View>
  );
};

export default HomeDetail;
