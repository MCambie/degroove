global.self = GLOBAL;
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Button, Avatar, Header, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import HeaderDGR from './components/Header';
import LoginDGR from './components/Login';
import FooterDGR from './components/Footer';
import ProjectDescription from './components/ProjectDescription';
import ProjectsList from './components/ProjectsList';
import SignUp from './components/SignUp'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
        <HeaderDGR/>
        </View>
        <LoginDGR/>
        <ProjectsList></ProjectsList>
        <SignUp/>
        <FooterDGR/>
      </ScrollView>
    );

    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: 'rgb(240,240,240)',
    //alignItems: 'center',
  },
  header: {
    width: "100%",
  },

  text :{
    color: "white",
  }
});
