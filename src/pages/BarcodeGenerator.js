import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import {fetchData} from './../helper';
import Connection from './../Connection';

class BarcodeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaMK: 'Mata Kuliah',
      namaRuang: 'Nama Ruangan',
      kodeMK: 'Kode Mata Kuliah',
      tanggal: '',
      token: 'ilham',
    };

    this.interval = null;
  }

  componentDidMount = async () => {
    this.interval = setInterval(() => {
      this.getKodeQR();
    }, 1000);
  };

  componentWillUnmount = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  getKodeQR = async () => {
    const {route} = this.props;
    const {token} = this.state;
    const {id_ruang} = route.params;
    const qrData = {token, id_ruang};
    console.log('qrData : ', qrData);

    const {data, token: newToken, STATUS_CODE} = await fetchData(
      'POST',
      Connection.host + 'get_qr.php',
      qrData,
    );

    if (STATUS_CODE === 'OK') {
      const dataLength = Array.isArray(data)
        ? data.length
        : Object.keys(data).length;
      if (dataLength) {
        this.setState({
          namaRuang: data.ruang,
          kodeMK: data.kode,
          namaMK: data.nama,
          token: newToken,
        });
      }
    } else {
      console.error('[Error 400]');
    }
  };

  render() {
    const {kodeMK, namaMK, token, namaRuang} = this.state;

    return (
      <View style={{flex: 1}}>
        <View style={styles.container.top}>
          <Image
            source={require('./../assets/images/logounpar.png')}
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
              logo={require('./../assets/images/logounpar.png')}
            />
          </View>
        </View>
        <View style={styles.container.bottom}>
          <Text style={styles.text.text}>{namaRuang}</Text>
          {/* <Text style={styles.text.text}>17 Juli 2018</Text> */}
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
