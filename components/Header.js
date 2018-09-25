import React from 'react';
import {View,Text} from 'react-native';
import {Header} from 'react-native-elements';

class HeaderDGR extends React.Component{
	render(){
		return(
			 <View>
       <Header
         backgroundColor='rgb(79, 188, 132)'
         leftComponent={{ icon: 'menu', color: '#fff'}}
         centerComponent={{ text: 'DEGROOF', style: { color: '#fff'} }}
         rightComponent={{ icon: 'home', color: '#fff'}}
       />
			</View>
			)
	}
}
export default HeaderDGR;
