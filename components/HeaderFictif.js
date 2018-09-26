import React from 'react';
import {View,Text,Button} from 'react-native';
import {Header} from 'react-native-elements';

class HeaderFictif extends React.Component{
	render(){
		return(
			 <View>
                <Button
                    title="ProjectsList"
                    onPress={() => this.props.navigation.navigate('ProjectsList')}
                />
                <Button
                    title="Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
			</View>
			)
	}
}
export default HeaderFictif;
