import React from 'react';
import {View,Text} from 'react-native';
import {Header,Button} from 'react-native-elements';
import { Icon } from "native-base";

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
                <Button
                    title="Test nav"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                {/* <Button
                  transparent
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Icon name="menu" />
                </Button> */}
			</View>
			)
	}
}
export default HeaderFictif;
