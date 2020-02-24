/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './src/assets/styles';
import QRCode from 'react-native-qrcode-svg';

class BarcodeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'https://facebook.github.io/react-native/'};
  }

  componentDidMount() {
    this.change = setInterval(() => {
      this.changeQR();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.change);
  }

  /* Method untuk mengganti QR code berdasarkan value */
  changeQR() {
    this.setState({
      value: 'https://reactjs.org/',
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.topContainer}>
          <Image
            source={require('./src/assets/images/logounpar.png')}
            style={styles.image}
          />
          <Text style={styles.text}>AIF 182100</Text>
          <Text style={styles.matkulText}>
            Manajemen Informasi dan Basis Data
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.barcodeContainer}>
            <QRCode
              size={250}
              value={this.state.value}
              logo={require('./src/assets/images/logounpar.png')}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.text}>09022</Text>
          <Text style={styles.text}>17 Juli 2018</Text>
        </View>
      </View>
    );
  }
}

export default BarcodeGenerator;
