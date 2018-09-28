import React from 'react';
import {View,Text,Image,StyleSheet,ScrollView,TouchableOpacity,Icon} from 'react-native';
import {Button} from 'react-native-elements';
class HeaderDGR extends React.Component{
	static navigationOptions={header:null}
	render(){
		return(
			<View style={styles.header}>
				<Image
					style={styles.logo}
					source={require('../assets/Symbol-white.png')}
				/>
				<Text style={styles.title} >
					{this.props.pageName}
				</Text>
				<Button style={styles.exit}
					icon={{name: 'input', size: 25}}
					backgroundColor= 'rgb(79, 188, 132)'
					onPress={()=>this.testfunction2()}
				>
			</Button>
			</View>
			)
	}
}

const styles = StyleSheet.create({

header: {
		width: '100%',
		paddingTop: 50,
		paddingBottom: 30,
		height: 90,
		backgroundColor: 'rgb(79, 188, 132)',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection:'row',
},
logo: {
	marginLeft: 20
},
title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
},
exit: {
		color: 'white',
		}
});
export default HeaderDGR;
