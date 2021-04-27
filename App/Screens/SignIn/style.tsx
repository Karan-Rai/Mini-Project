import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980B9',
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
  image: {
    height: 150,
    width: 150,
  },
  body: {
    flex: 3,
    backgroundColor: '#D0D3D4',
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
  button: {
    alignItems: 'center',
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#2980B9',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default styles;
