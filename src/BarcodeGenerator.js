import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import {fetchData} from '../src/helper';
import Connection from './Connection';

class BarcodeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaMK: 'Mata Kuliah',
      namaRuang: 'Nama Ruangan',
      kodeMK: 'Kode Mata Kuliah',
      tanggal: '',
      token: 'ilham',
      id_ruang: '1',
      value: 'https://facebook.github.io/react-native/',
      isScanned: false,
    };

    this.interval = null;
  }

  componentDidMount = async () => {
    this.interval = setInterval(() => {
      this.getKodeQR();
    }, 1000);
    // setInterval(this.getKodeQR(), 5000);
  };

  componentWillUnmount = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  getKodeQR = async () => {
    const {token, id_ruang} = this.state;
    const qrData = {token, id_ruang};

    const {data, token: newToken} = await fetchData(
      'POST',
      Connection.host + 'get_qr.php',
      qrData,
    );
    // console.log(qrData);
    // console.log(data);
    const dataLength = Array.isArray(data)
      ? data.length
      : Object.keys(data).length;
    // this.setState({panjangJson});
    if (dataLength) {
      console.log('data', data);
      console.log('token', newToken);
      this.setState({
        namaRuang: data.ruang,
        kodeMK: data.kode,
        namaMK: data.nama,
        token: newToken,
      });
      // console.log(dataLength);
    }
  };

  render() {
    const {kodeMK, namaMK, token, namaRuang} = this.state;

    return (
      <View style={{flex: 1}}>
        <View style={styles.container.top}>
          <Image
            source={require('./assets/images/logounpar.png')}
            style={styles.image}
          />
          <Text style={styles.text.text}>{kodeMK}</Text>
          <Text style={styles.text.matkulText}>{namaMK}</Text>
        </View>
        <View style={styles.container.main}>
          <View style={styles.container.barcode}>
            <QRCode
              size={250}
              value={token}
              logo={require('./assets/images/logounpar.png')}
            />
          </View>
        </View>
        <View style={styles.container.bottom}>
          <Text style={styles.text.text}>{namaRuang}</Text>
          <Text style={styles.text.text}>17 Juli 2018</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    top: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    main: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottom: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    barcode: {
      backgroundColor: 'grey',
      height: 250,
      width: 250,
    },
  },
  image: {
    height: 70,
    width: 70,
    marginBottom: 5,
  },
  text: {
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
  },
};

export default BarcodeGenerator;
