import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  matkulText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barcodeContainer: {
    backgroundColor: 'grey',
    height: 250,
    width: 250,
  },
});

export default styles;
