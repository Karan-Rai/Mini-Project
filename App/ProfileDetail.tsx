import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
class ProfileDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={this.props.profileDetails.photo}
            style={styles.imageBox}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.textViewStyle}>
            <Icon name="person" size={30} />
            <Text style={styles.textStyle}>
              {this.props.profileDetails.name}
            </Text>
          </View>
          <View style={styles.textViewStyle}>
            <Icons name="phone" size={30} />
            <Text style={styles.textStyle}>
              {this.props.profileDetails.phone}
            </Text>
          </View>
          <View style={styles.textViewStyle}>
            <Icons name="email" size={30} />
            <Text style={styles.textStyle}>
              {this.props.profileDetails.email}
            </Text>
          </View>
          <View style={styles.textViewStyle}>
            <Icons name="office-building" size={30} />
            <Text style={styles.textStyle}>
              {this.props.profileDetails.locality}
            </Text>
          </View>
          <View style={styles.textViewStyle}>
            <Icons name="city" size={30} />
            <Text style={styles.textStyle}>
              {this.props.profileDetails.city}
            </Text>
          </View>
          <View style={styles.textViewStyle}>
            <Icon name="location" size={30} />
            <Text style={styles.textStyle}>
              {this.props.profileDetails.state}
            </Text>
          </View>
          <View style={styles.textViewStyle}>
            <Icons name="postage-stamp" size={30} />
            <Text style={styles.textStyle}>
              {this.props.profileDetails.pin}
            </Text>
          </View>
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
  textViewStyle: {
    flexDirection: 'row',
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  textStyle: {
    marginHorizontal: 30,
    fontSize: 20,
  },
  mainTextStyle: {
    width: '100%',
    height: 40,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
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
  },
});
const mapStateToProps = state => {
  return {
    profileDetails: state.profileDetailReducer.profileDetails,
  };
};
export default connect(mapStateToProps, null)(ProfileDetail);
