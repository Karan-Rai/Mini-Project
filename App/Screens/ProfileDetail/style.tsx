import {StyleSheet} from 'react-native';

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

export default styles;
