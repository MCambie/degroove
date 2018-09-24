import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import NewUser from './components/NewUser';
import app from './components/firebaseAuth';
import 'firebase/auth';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'enter your email',
      password: 'enter a password',
      error: ''
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
        console.log(user);
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
  }

  emailinputChange(input) {
    this.setState({email: input});
  }

  passwordinputChange(input) {
    this.setState({password: input});
  }

  submit(email, password) {
    app.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
      //this.setState({error: errorMessage});
    });
  }

  submit2(email, password) {
    app.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
      //this.setState({error: errorMessage});
    });
  }

  render() {
    console.log(this.state.email);
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <NewUser text={this.state.email} function={(input)=>this.emailinputChange(input)}/>
        <NewUser text={this.state.password} function={(input)=>this.passwordinputChange(input)}/>
        <Button
          onPress={this.submit(this.state.email, this.state.password)}
          title="Sign Up"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.submit2(this.state.email, this.state.password)}
          title="Sign in"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
