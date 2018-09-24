import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Avatar, Header, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import HeaderDGR from './components/Header';
import LoginDGR from './components/Login';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <HeaderDGR/>
        </View>
        <LoginDGR/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: 'rgb(240,240,240)',
    alignItems: 'center',
  },
  header: {
    width: "100%",
  },

  text :{
    color: "white",
  }
});
