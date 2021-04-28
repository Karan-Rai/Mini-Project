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
import Button from '../../components/Button';
import {TEXT} from '../../components/String';
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
            <Text style={styles.welcomeText}>{TEXT.welcome}</Text>
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
              placeholder={TEXT.username}
              placeholderTextColor="#283747"
              style={styles.input}
              onChangeText={val => textInputChange(val)}
            />
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{TEXT.usernameError}</Text>
            </Animatable.View>
          )}
          <View style={styles.action}>
            <Icon
              name="lock-closed"
              size={30}
              style={{paddingVertical: 20, paddingHorizontal: 20}}
            />
            <TextInput
              placeholder={TEXT.password}
              placeholderTextColor="#283747"
              style={styles.input}
              secureTextEntry
              onChangeText={val => handlePasswordChange(val)}
              autoCapitalize="none"
            />
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{TEXT.passwordError}</Text>
            </Animatable.View>
          )}
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.label}>{TEXT.rememberMe}</Text>
          </View>
          <Button
            title="Sign In"
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
