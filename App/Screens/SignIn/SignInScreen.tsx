import React, {useState} from 'react';
import {
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
import {AuthContext} from '../../components/context';
import Users from '../../components/Users';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

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
              source={require('/Users/karry/ReacNativeApp/App/components/image/react.png')}
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

export default SignInScreen;
