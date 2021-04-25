import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import {AuthContext} from './context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';

const ImageScreen = ({navigation, route}) => {
  const {signOut} = React.useContext(AuthContext);

  React.useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.header}>
          <Text>{route.params?.photo}</Text>
        </View>
        <View style={styles.row}>
          <Icons
            name="person"
            size={30}
            style={{marginHorizontal: 20, marginBottom: 20}}
          />
          <Title style={styles.title}>{route.params?.name}</Title>
        </View>
        <View style={styles.row}>
          <Icon
            name="phone"
            size={30}
            style={{marginHorizontal: 20, marginBottom: 20}}
          />
          <Title style={styles.title}>{route.params?.phone}</Title>
        </View>
        <View style={styles.row}>
          <Icon
            name="email"
            size={30}
            style={{marginHorizontal: 20, marginBottom: 20}}
          />
          <Title style={styles.title}>{route.params?.email}</Title>
        </View>
        <View style={styles.row}>
          <Icons
            name="home"
            size={30}
            style={{marginHorizontal: 20, marginBottom: 20}}
          />
          <Title style={styles.title}>{route.params?.locality}</Title>
        </View>
        <View style={styles.row}>
          <Icons
            name="location"
            size={30}
            style={{marginHorizontal: 20, marginBottom: 20}}
          />
          <Title style={styles.title}>{route.params?.city}</Title>
        </View>
        <View style={styles.row}>
          <Icons
            name="flag"
            size={30}
            style={{marginHorizontal: 20, marginBottom: 20}}
          />
          <Title style={styles.title}>{route.params?.state}</Title>
        </View>
        <View style={styles.row}>
          <Icon
            name="home-map-marker"
            size={30}
            style={{marginHorizontal: 20, marginBottom: 20}}
          />
          <Title style={styles.title}>{route.params?.pin}</Title>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}></View>
      <View>
        <Button title="Sign Out" onPress={() => signOut()} />
        <Button
          title="Edit details"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  userInfo: {
    flex: 3,
    justifyContent: 'flex-start',
    marginTop: 30,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17A589',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default ImageScreen;
