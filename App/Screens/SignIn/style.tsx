import {StyleSheet} from 'react-native';
import {COLORS} from '../../components/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
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
  welcomeText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  image: {
    height: 150,
    width: 150,
  },
  body: {
    flex: 3,
    backgroundColor: COLORS.bodyColor,
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
});

export default styles;
