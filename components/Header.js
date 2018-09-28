import React from 'react';
import {View,Text,Icon} from 'react-native';
import {Header} from 'react-native-elements';

class HeaderDGR extends React.Component{
	render(){
		return(
			 <View>
       <Header
         backgroundColor='rgb(79, 188, 132)'
         centerComponent={{ text: 'DEGROOF', style: { color: '#fff'} }}
         rightComponent={{ icon: 'exit-to-app', color: '#fff'}}
       />
			</View>
			)
	}
}
export default HeaderDGR;
