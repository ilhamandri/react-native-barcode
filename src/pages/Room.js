import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, Picker} from 'react-native';

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress = () => {
    this.props.navigation.replace('BarcodeGenerator');
  };

  render() {
    return (
      <View style={styles.container.main}>
        <Text style={styles.text.title}> Silahkan Pilih Ruang </Text>
        <View style={styles.container.content}>
          <Picker selectedValue="Java" style={styles.picker}>
            <Picker.Item label="java" value="Java" />
            <Picker.Item label="JavaScript" value="Java" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.onPress()}>
          <Text style={styles.text.btnText}>BANGKITKAN KODE QR</Text>
        </TouchableOpacity>
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
      width: '80%',
      height: 80,
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
