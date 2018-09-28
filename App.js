// Fixes isomorphic-fetch
GLOBAL.self = GLOBAL;
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import {Button, Avatar, Header, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import HeaderDGR from './components/Header';
import FooterDGR from './components/Footer';
import ProjectDescription from './components/ProjectDescription';
import ProjectsList from './components/ProjectsList';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import SignUp from './components/SignUp'
import LoginDGR from './components/Login'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={test:true};
  }
  
  render() {
    return (
        <RootStack/>
    );

    }
  }
  var test = new App().state.test;
const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
      ProjectDescription: ProjectDescription,
      ProjectsList: ProjectsList,
      Login: LoginDGR,
      Ok: SignUp,
      Test: test ? ProjectsList : SignUp,
      Profile: {
        screen: SignUp,
        navigationOptions: ({ navigation }) => ({
          title: this.state.test,
        }),
      },
    },
    {
      initialRouteName: 'Ok',
    }
);

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
