import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {Avatar, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class LoginDGR extends React.Component{
	render(){
		return(
			 <View style={styles.login}>
       <Avatar
           medium
           source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
           onPress={() => console.log("Works!")}
           activeOpacity={0.7}
       />
       <FormLabel>Login</FormLabel>
       <FormInput />
       {/* if error display :*/}
       <FormValidationMessage>{'This field is required'}</FormValidationMessage>
       <FormLabel>Password</FormLabel>
       <FormInput />
       {/* if error display :*/}
       <FormValidationMessage>{'This field is required'}</FormValidationMessage>

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
    alignItems: 'center',
  }
});
