import React from 'react';
import {View,Text,Image,Button,ScrollView,StyleSheet} from 'react-native';
import { Card } from 'react-native-elements'
import ProjectDetails from './ProjectDetails';
import FooterDGR from './Footer';
//import { withNavigation } from 'react-navigation';

class ProjectDescription extends React.Component{
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
			 <View>
				 				<Text style={styles.header}>
									Project Description
			 					</Text>
                <ProjectDetails></ProjectDetails>
                <Text style={{marginBottom: 10}}>
                    Mission description.
                </Text>
                <Text style={{marginBottom: 10}}>
                    First description.
                </Text>
								<Text>{name}</Text>
								<Text>{region}</Text>
								<Text>{field}</Text>
								<Text>{type}</Text>
								<Text>{skills}</Text>
								<Text>{hours}</Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
									<FooterDGR/>
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
    }
})
