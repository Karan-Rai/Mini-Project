import {StyleSheet} from 'react-native';
import {COLORS} from '../../components/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.splashColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 150,
    width: 150,
  },
});

export default styles;
