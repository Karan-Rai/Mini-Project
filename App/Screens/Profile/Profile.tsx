import React from 'react';
import {
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import * as ImagePicker from 'react-native-image-picker';
import {saveProfileDetails} from '../../Redux/action';
import styles from './style';
import Input from '../../components/TextInput';
import Button from '../../components/Button';

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
                source={require('/Users/karry/ReacNativeApp/App/components/image/profile.jpg')}
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
              <Input
                placeholder="Full Name"
                onChangeText={name => {
                  this.setState({name: name}, () => {});
                }}
              />
            </View>

            <View style={styles.action}>
              <Input
                placeholder="Phone No."
                keyboardType="phone-pad"
                maxLength={10}
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
              <Input
                placeholder="Locality"
                onChangeText={locality => {
                  this.setState({locality: locality}, () => {});
                }}
              />
            </View>
            <View style={styles.action}>
              <Input
                placeholder="City"
                onChangeText={city => {
                  this.setState({city: city}, () => {});
                }}
              />
            </View>
            <View style={styles.action}>
              <Input
                placeholder="State"
                onChangeText={state => {
                  this.setState({state: state}, () => {});
                }}
              />
            </View>
            <View style={styles.action}>
              <Input
                placeholder="Pin"
                keyboardType="number-pad"
                onChangeText={pin => {
                  this.setState({pin: pin}, () => {});
                }}
              />
            </View>

            <Button
              disabled={
                (this.state.name &&
                  this.state.phone &&
                  this.state.photo &&
                  this.state.email &&
                  this.state.city) == ''
                  ? true
                  : false
              }
              onPress={this.onSubmit}
              title="Submit"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    reduxSaveProfileDetail: profileDetail =>
      dispatch(saveProfileDetails(profileDetail)),
  };
};
export default connect(null, mapDispatchToProps)(Profile);
