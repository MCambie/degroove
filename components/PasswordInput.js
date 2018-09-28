import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Input, Label, Item} from 'native-base';
class PasswordInput extends React.Component{
	render(){
		return(
			 <View style={styles.container}>
                <Item floatingLabel style = {styles.item}>
                    <Label>Password</Label>
                    <Input/>
                </Item> 
			</View>
			)
	}
}
const styles = StyleSheet.create({
	container:{
        alignItems: "center",
        padding: 30,
	},
    item:{
    marginTop : 10,
},
});
export default PasswordInput;