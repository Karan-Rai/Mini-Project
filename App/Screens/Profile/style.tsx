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

export default styles;
