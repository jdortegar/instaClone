import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import config from '../../config';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    };
  }

  updateText = (text, field) => {
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials
    });
  };

  register = () => {
    // Navigate Main Page
    fetch(config.baseUrl + 'signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.credentials)
    })
      .then(data => alert(JSON.stringify(data)))
      .catch(err => alert(err.message));

    this.props.navigation.navigate('main');
  };

  render() {
    return (
      <View
        style={{
          height: 100 + '%',
          width: 100 + '%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(230,230,230)'
        }}
        onPress={this.register}
      >
        <Text>REGISTER PAGE</Text>
        <TextInput
          value={this.state.credentials.email}
          onChangeText={text => this.updateText(text, 'email')}
          style={styles.input}
          autoCorrect={false}
          placeholder="Username"
        />
        <TextInput
          value={this.state.credentials.password}
          onChangeText={text => this.updateText(text, 'password')}
          style={styles.input}
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <Button onPress={() => this.register()} title="Signup" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 100 + '%',
    marginHorizontal: 50,
    backgroundColor: 'rgb(255,255,255)',
    marginBottom: 10
  }
});

export default withNavigation(Register);
