import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';

import {fetchData} from './../helper';
import Connection from './../Connection';

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruang: [],
      idRuang: '',
    };
  }

  componentDidMount = async () => {
    this.getDaftarRuang();
  };

  // event untuk bangkitkan barcode
  onPress = () => {
    const {idRuang} = this.state;
    this.props.navigation.replace('BarcodeGenerator', {id_ruang: idRuang});
  };

  // function untuk mendapatkan daftar ruangan
  getDaftarRuang = async () => {
    const daftarRuang = await fetchData(
      'GET',
      Connection.host + 'get_ruang.php',
    );
    this.setState({ruang: daftarRuang.ruang});
    console.log('Ruang : ', this.state.ruang);
  };

  // function untuk dropdown item
  pickerItem = () => {
    const {ruang} = this.state;
    return ruang.map(data => (
      <Picker.Item key={data.id} label={data.nama} value={data.id} />
    ));
  };

  // perubahan label dropdown
  onValueChange = (item, index) => {
    this.setState({idRuang: item});
    console.log('item :', item);
    console.log('index:', index);
  };

  render() {
    const {idRuang} = this.state;
    return (
      <View style={styles.container.main}>
        <Text style={styles.text.title}> Silahkan Pilih Ruang </Text>
        <View style={styles.container.content}>
          <Picker
            selectedValue={idRuang}
            mode="dropdown"
            style={styles.picker}
            onValueChange={this.onValueChange}>
            {this.pickerItem()}
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.onPress()}>
          <Text style={styles.text.btnText}>BANGKITKAN KODE QR</Text>
        </TouchableOpacity>

        {/* <Button title="GET RUANG" onPress={this.getDaftarRuang} /> */}
      </View>
    );
  }
}

const styles = {
  container: {
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      alignItems: 'center',
      borderWidth: 1,
      width: '60%',
      height: 50,
    },
  },
  button: {
    backgroundColor: '#247158',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '80%',
    marginTop: 10,
    paddingVertical: 8,
  },
  text: {
    btnText: {
      color: 'white',
      fontWeight: 'bold',
    },
    title: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
    },
  },
  picker: {
    height: 50,
    width: 200,
  },
};

export default Room;
