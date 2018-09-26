import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements'
class UpdateProfileButton extends React.Component{
	render(){
		return(
			 <View style={styles.container}>
                <Button style={styles.click} title='Modifier le profil' backgroundColor="rgb(79,188,132)" buttonStyle={{width: 200,margin: 30,}} onPress={this.props.function}/>
			</View>
			)
	}
}
const styles=StyleSheet.create({
	container:{
		// flex: 1,
		alignItems: "center",
	},
	click:{
        // margin: 30,
		// width: 200,
    },
})
export default UpdateProfileButton;