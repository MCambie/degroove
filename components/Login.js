import React from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Input, Label, Item} from 'native-base';

class LoginDGR extends React.Component{
	render(){
		return(
			 <View style={styles.login}>
         <Image
					style={{width: 150, height: 150, borderRadius : 75}}
					source={require('../assets/logo.png')}
				/>

          <Item floatingLabel style = {styles.item}>
            <Label>Email</Label>
            <Input/>
          </Item> 

          <Item floatingLabel style = {styles.item}>
              <Label>Password</Label>
              <Input />
          </Item> 
  
        <View style={styles.button}>
            <Button style={styles.click}
              backgroundColor='rgb(79, 188, 132)'
              small
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
  }

});
