import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import * as ImagePicker from 'react-native-image-picker';
import {saveProfileDetails} from './Redux/action';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      locality: '',
      city: '',
      state: '',
      pin: '',
      photo: '',
    };
  }
  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorMessage) {
        console.log('ImagePicker Error: ', res.errorMessage);
      } else {
        let source = res;
        this.setState({
          photo: source,
        });
      }
    });
  };

  onSubmit = () => {
    var profileDetails = {};
    profileDetails.name = this.state.name;
    profileDetails.phone = this.state.phone;
    profileDetails.email = this.state.email;
    profileDetails.locality = this.state.locality;
    profileDetails.city = this.state.city;
    profileDetails.state = this.state.state;
    profileDetails.pin = this.state.pin;
    profileDetails.photo = this.state.photo;
    this.props.reduxSaveProfileDetail(profileDetails);
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={this.selectFile}>
            {this.state.photo === null ? (
              <Image
                source={require('/Users/karry/ReacNativeApp/App/image/profile.jpg')}
                style={styles.imageBox}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={{uri: this.state.photo.uri}}
                style={styles.imageBox}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.action}>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#283747"
                style={styles.input}
                returnKeyType="next"
                onChangeText={name => {
                  this.setState({name: name}, () => {});
                }}
              />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Mobile No."
                placeholderTextColor="#283747"
                style={styles.input}
                keyboardType="phone-pad"
                maxLength={10}
                returnKeyType="next"
                onChangeText={phone => {
                  this.setState({phone: phone}, () => {});
                }}
              />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Email address"
                placeholderTextColor="#283747"
                keyboardType="email-address"
                style={styles.input}
                returnKeyType="next"
                onChangeText={email => {
                  this.setState({email: email}, () => {});
                }}
              />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Locality"
                placeholderTextColor="#283747"
                style={styles.input}
                returnKeyType="next"
                onChangeText={locality => {
                  this.setState({locality: locality}, () => {});
                }}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                placeholder="City"
                placeholderTextColor="#283747"
                style={styles.input}
                returnKeyType="next"
                onChangeText={city => {
                  this.setState({city: city}, () => {});
                }}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                placeholder="State"
                placeholderTextColor="#283747"
                style={styles.input}
                returnKeyType="next"
                onChangeText={state => {
                  this.setState({state: state}, () => {});
                }}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                placeholder="Pin Code"
                placeholderTextColor="#283747"
                style={styles.input}
                keyboardType="number-pad"
                returnKeyType="done"
                onChangeText={pin => {
                  this.setState({pin: pin}, () => {});
                }}
              />
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.submitButton}
                disabled={
                  (this.state.name &&
                    this.state.phone &&
                    this.state.photo &&
                    this.state.email &&
                    this.state.city) == ''
                    ? true
                    : false
                }
                onPress={this.onSubmit}>
                <Text style={{fontSize: 20, color: '#fff'}}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980B9',
  },

  body: {
    flex: 3,
    backgroundColor: '#D0D3D4',
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'column',
  },
  dropdown: {
    marginHorizontal: 50,
  },
  action: {
    flexDirection: 'row',

    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#2980B9',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  imageButton: {
    borderColor: 'black',
    borderWidth: 1,
    width: 140,
    height: 140,
    borderRadius: 100,
  },
});
const mapDispatchToProps = dispatch => {
  return {
    reduxSaveProfileDetail: profileDetail =>
      dispatch(saveProfileDetails(profileDetail)),
  };
};
export default connect(null, mapDispatchToProps)(Profile);
