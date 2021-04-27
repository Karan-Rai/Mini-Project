import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
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

const mapStateToProps = state => {
  return {
    profileDetails: state.profileDetailReducer.profileDetails,
  };
};
export default connect(mapStateToProps, null)(ProfileDetail);
