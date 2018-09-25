import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Displaytest extends React.Component {

  render() {
    return (
        <Text>{this.props.testme}</Text>
    );
  }
}
