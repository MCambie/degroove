// Fixes isomorphic-fetch
//GLOBAL.self = GLOBAL;
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginDGR from './components/Login';
import ProjectDescription from './components/ProjectDescription';
import ProjectsList from './components/ProjectsList';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import SignUp from './components/SignUp';
import app from './components/firebaseAuth';
import 'firebase/auth';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: false
    };
  }

  componentDidMount() {
    app.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        this.setState({connected: !this.state.connected})
        console.log("yup" + this.state.connected);
        // ...
      } else {
        // User is signed out.
        console.log("nop" + this.state.connected);
        // ...
      }
    }.bind(this));
  }

  render() {
    var testing = this.state.connected;
    const RootStack = createStackNavigator(
        {
          Home: HomeScreen,
          Details: DetailsScreen,
          ProjectDescription: ProjectDescription,
          ProjectsList: ProjectsList,
          Login: LoginDGR,
          Signup: SignUp,
          connected : testing ? ProjectsList : LoginDGR
        },
        {
          initialRouteName: 'connected',
        }
    );
    return (
      <RootStack/>
    )
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
