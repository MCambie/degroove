import React from 'react';
import {TextInput } from 'react-native';

export default class NewUser extends React.Component {


  render() {
    return (
      <TextInput
        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.props.function}
        value={this.props.text}
      />
    );
  }
}
