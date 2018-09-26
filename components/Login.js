import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {Button, Avatar, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import app from './firebaseAuth';
import base from './firestore';
import 'firebase/auth';

class LoginDGR extends React.Component{

	constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  emailinputChange(input) {
    this.setState({email: input});
  }

  passwordinputChange(input) {
    this.setState({password: input});
  }

  submitExistingUser() {
    app.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
    });
  }

	render(){
		return(
			 <View style={styles.login}>
       <Avatar
           medium
           source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
           onPress={() => console.log("Works!")}
           activeOpacity={0.7}
       />
       <FormLabel style={{fontSize: '50'}} >Login</FormLabel>
       <FormInput placeholder = "email" onChangeText={(input)=>this.emailinputChange(input)}/>
       {/* if error display :*/}
       <FormValidationMessage>{'This field is required'}</FormValidationMessage>
       <FormLabel>Password </FormLabel>
       <FormInput onChangeText={(input)=>this.passwordinputChange(input)}/>
       {/* if error display :*/}
       <FormValidationMessage>{'This field is required'}</FormValidationMessage>
       <View style={styles.button}>
           <Button
						onPress={()=>this.submitExistingUser()}
            backgroundColor='rgb(79, 188, 132)'
            small
            title='Sign in' />
           <Button
            backgroundColor='rgb(79, 188, 132)'
            small
            title='Create a new account'
						onPress={() => this.props.navigation.navigate('Signup')}
						/>
        </View>
      </View>
			)
	}
}
export default LoginDGR;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'rgb(240,240,240)',
    alignItems: 'center'
  },
  font: {
    fontSize: 50
  },
  button:{
    flexDirection: 'row',

  },
  green:{

  }
});
