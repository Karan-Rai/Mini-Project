import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {AuthContext} from './context';
import Users from '../App/components/Users';
import Icon from 'react-native-vector-icons/Ionicons';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);

  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const loginHandle = (username, password) => {
    const foundUser = Users.filter(item => {
      return username == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(username, password);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('/Users/karry/ReacNativeApp/App/image/react.png')}
            />
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                paddingBottom: 20,
              }}>
              Welcome to Sign In Screen
            </Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.action}>
            <Icon
              name="person"
              size={30}
              style={{paddingVertical: 20, paddingHorizontal: 20}}
            />
            <TextInput
              placeholder="Email/ userName"
              placeholderTextColor="#283747"
              style={styles.input}
              onChangeText={val => textInputChange(val)}
            />
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.action}>
            <Icon
              name="lock-closed"
              size={30}
              style={{paddingVertical: 20, paddingHorizontal: 20}}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#283747"
              style={styles.input}
              secureTextEntry
              onChangeText={val => handlePasswordChange(val)}
              autoCapitalize="none"
            />
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.label}>Keep me signed in</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                loginHandle(data.username, data.password);
              }}>
              <Text style={{fontSize: 20, color: '#fff'}}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980B9',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  imageContainer: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
  body: {
    flex: 3,
    backgroundColor: '#D0D3D4',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'column',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'flex-end',
  },

  label: {
    margin: 8,
  },
  action: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#2980B9',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default SignInScreen;
