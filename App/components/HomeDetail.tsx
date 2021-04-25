import React from 'react';

import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
interface HomeDetailprops {}
const {width, height} = Dimensions.get('window');
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

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: '#fff',
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  titleheader: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  id: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.02,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.02,
    color: '#2471A3',
    fontSize: 20,
    fontWeight: 'bold',
  },

  image: {
    height: height / 4,
    borderRadius: 10,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
});

export default HomeDetail;
