import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import HomeDetail from './HomeDetail';
import axios from 'axios';
import styles from './style';

export const Home = ({navigation}) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetailsFromAPI();
  }, []);

  function getDetailsFromAPI() {
    axios
      .get('https://api.github.com/users')
      .then(async function (response) {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!details) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={details}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return <HomeDetail item={item} />;
        }}
      />
    </View>
  );
};

export default Home;
