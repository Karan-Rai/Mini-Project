import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {COLORS} from '../../components/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.homeBackground,
  },
  cardView: {
    backgroundColor: COLORS.homeCardColor,
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
    color: COLORS.homeTitle,
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

export default styles;
