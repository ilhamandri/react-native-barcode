import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress = () => {
    this.props.navigation.navigate('BarcodeGenerator');
  };

  render() {
    return (
      <View>
        <Text> Room </Text>
        <Button onPress={this.onPress} title="Bangkitkan QR" />
      </View>
    );
  }
}

export default Room;
