import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Camera extends Component {
  login() {
    // Navigate Main Page
    console.log(this);
    // this.props.navigation.navigate('main');
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          height: 100 + '%',
          width: 100 + '%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={this.login}
      >
        <Text>Camera Page</Text>
      </TouchableOpacity>
    );
  }
}

export default Camera;
