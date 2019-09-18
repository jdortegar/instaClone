import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  login = () => {
    // Navigate Main Page

    this.props.navigation.navigate('register');
  };

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
        <Text>New user?</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Login);
