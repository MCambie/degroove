import React from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Input, Label, Item, Icon} from 'native-base';
import HeaderDGR from './Header';

class LoginDGR extends React.Component{
	static navigationOptions={header:null}
	render(){
		return(
			 <View style={styles.login}>
				 <HeaderDGR pageName={"Login"}/>
         <Image style={styles.avatar}
					style={{width: 150, height: 150, borderRadius : 75}}
					source={require('../assets/logo.png')}
				/>

          <Item floatingLabel style = {styles.item}>
            <Icon name='mail'/>
            <Label>Email</Label>
            <Input keyboardType="email-address"/>
          </Item>

          <Item floatingLabel style = {styles.item}>
          <Icon name ='lock'/>
              <Label>Password</Label>
              <Input secureTextEntry={true}/>
          </Item>

        <View>
            <Button style={styles.click}
              backgroundColor='rgb(79, 188, 132)'
              title='Sign in' />

             <View style = {styles.lineStyle} />

             <Text style ={styles.signUp}>
              You don't have an account ?
             </Text>

            <Button style = {styles.click}
                  backgroundColor='rgb(79, 188, 132)'
                  title='Create an account' />
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
	 marginTop: 10
 },
 item:{
  marginTop : 10,
	marginLeft : 30,
	marginRight: 30
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
			flex: 1,
			width: '100%',
			backgroundColor: 'rgb(79, 188, 132)',
			color: 'white'
			}

});
