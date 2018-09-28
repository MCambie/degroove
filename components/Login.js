import React from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Input, Label, Item, Icon} from 'native-base';
import HeaderDGR from './Header';
import app from './firebaseAuth';
import 'firebase/auth';


class LoginDGR extends React.Component{

	static navigationOptions={header:null}
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
				 <HeaderDGR pageName={"Login"}/>
         <Image
					style={{width: 150, height: 150, borderRadius : 75, marginTop: 20}}
					source={require('../assets/logo.png')}
				/>

          <Item floatingLabel style = {styles.item}>
						<Icon style={{color:"rgb(79, 188, 132)"}} name='mail'/>
            <Label style={{color:"rgb(132, 134, 137)"}}>Email</Label>
            <Input style={{color:"rgb(132, 134, 137)"}} keyboardType="email-address" onChangeText={(input)=>this.emailinputChange(input)}/>
          </Item>

          <Item floatingLabel style = {styles.item}>
						<Icon style={{color:"rgb(79, 188, 132)"}} name ='lock'/>
	              <Label style={{color:"rgb(132, 134, 137)"}}>Password</Label>
              <Input style={{color:"rgb(132, 134, 137)"}} secureTextEntry={true} onChangeText={(input)=>this.passwordinputChange(input)}/>
          </Item>

        <View>
            <Button
							style={styles.click}
							buttonStyle={{marginTop: 30}}
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
							buttonStyle={{marginTop: 30}}
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
    backgroundColor: 'rgb(240,240,240)',
    alignItems: 'center'
  },
 avatar: {
     marginTop: 30
 },
 item:{
  marginTop : 10,
    marginLeft : 30,
    marginRight: 30
 },

  click : {
    margin : 30,
    width : 200,
    marginTop : 30,
  },

  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
},

  signUp : {
    textAlign : 'center',
    // marginTop : 30
  },
    header: {
            flex: 1,
            width: '100%',
            backgroundColor: 'rgb(79, 188, 132)',
            color: 'white'
            }

});
