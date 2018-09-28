import React from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Input, Label, Item, Icon} from 'native-base';
import app from './firebaseAuth';
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
				 <Text style={styles.header}>
					 Login
			 	 </Text>
         <Image
					style={{width: 150, height: 150, borderRadius : 75}}
					source={require('../assets/logo.png')}
				/>

          <Item floatingLabel style = {styles.item}>
            <Icon name='mail'/>
            <Label>Email</Label>
            <Input onChangeText={(input)=>this.emailinputChange(input)}/>
          </Item>

          <Item floatingLabel style = {styles.item}>
          <Icon name ='lock'/>
              <Label>Password</Label>
              <Input onChangeText={(input)=>this.passwordinputChange(input)}/>
          </Item>

        <View>
            <Button
							style={styles.click}
							onPress={()=>this.submitExistingUser()}
              backgroundColor='rgb(79, 188, 132)'
              title='Sign in'
						/>

             <View style = {styles.lineStyle} />

             <Text style ={styles.signUp}>
              You don't have an account ?
             </Text>

            <Button
							style = {styles.click}
							onPress={() => this.props.navigation.navigate('Signup')}
              backgroundColor='rgb(79, 188, 132)'
              title='Create an account'
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
    // marginTop: 10,
    padding : 30,
    backgroundColor: 'rgb(240,240,240)',
    alignItems: 'center'
  },

 item:{
  marginTop : 10
 },

  click : {
    margin : 30,
    width : 200
  },

  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
},

  signUp : {
    textAlign : 'center',
    marginTop : 30
  },
	header: {
			// flex: 1,
			width: '100%',
			backgroundColor: 'rgb(79, 188, 132)',
			color: 'white'
			}

});
