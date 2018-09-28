import React from 'react';
import {View,Text,Image,Button,ScrollView,StyleSheet} from 'react-native';
import { Card } from 'react-native-elements'
import ProjectDetails from './ProjectDetails';
import FooterDGR from './Footer';
import HeaderDGR from './Header';
//import { withNavigation } from 'react-navigation';

class ProjectDescription extends React.Component{
	static navigationOptions={header:null}
	render(){
		const { navigation } = this.props;
		const id = navigation.getParam('id', 'NO-ID');
		const name = navigation.getParam('name', 'NO-ID');
		const region = navigation.getParam('region', 'NO-ID');
		const field = navigation.getParam('field', 'NO-ID');
		const type = navigation.getParam('type', 'NO-ID');
		const skills = navigation.getParam('skills', 'NO-ID');
		const hours = navigation.getParam('hours', 'NO-ID');
		return(
			 <View style={{flex: 1}}>
				 	<HeaderDGR pageName={"Project Description"}/>
                <ProjectDetails></ProjectDetails>
                <Text style={{marginBottom: 10,paddingLeft: 30,paddingRight: 30}}>
                    Mission description.
                </Text>
                <Text style={{marginBottom: 10,paddingLeft: 30,paddingRight: 30}}>
                    First description.
                </Text>
								<Text style={{marginBottom: 10,paddingLeft: 30,paddingRight: 30}}>{name}</Text>
								<Text style={{marginBottom: 10,paddingLeft: 30,paddingRight: 30}}>{region}</Text>
								<Text style={{marginBottom: 10,paddingLeft: 30,paddingRight: 30}}>{field}</Text>
								<Text style={{marginBottom: 10,paddingLeft: 30,paddingRight: 30}}>{type}</Text>
								<Text style={{marginBottom: 10,paddingLeft: 30,paddingRight: 30}}>{skills}</Text>
								<Text style={{marginBottom: 10,paddingLeft: 30,paddingRight: 30}}>{hours}</Text>
								<View style={styles.button}>
								<Button
                    // icon={{name: 'code'}}
                    backgroundColor = 'white'
                    color = "rgb(79, 188, 132)"
                    // buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    buttonStyle = {{
                        width : 200,
                        marginTop : 30,
                        color : 'rgb(79, 188, 132)',
                        justifyContent : 'center'
                    }}
                title='Apply for this mission' />
							</View>
								<View style={{position:"absolute",bottom:0,left:0,right:0}}>
									<FooterDGR navigation={this.props.navigation}/>
							</View>
			</View>
			)
	}
}

//export default withNavigation(ProjectDescription);
export default ProjectDescription;

const styles = StyleSheet.create({
    header: {
					flex: 1,
					width: '100%',
					backgroundColor: 'rgb(79, 188, 132)',
					color: 'white'
    },
		button: {

		}
})
