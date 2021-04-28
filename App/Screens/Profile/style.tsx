import {StyleSheet} from 'react-native';
import {COLORS} from '../../components/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },

  body: {
    flex: 3,
    backgroundColor: COLORS.bodyColor,
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

export default styles;
