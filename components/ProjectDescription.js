import React from 'react';
import {View,Text,Image,Button,ScrollView} from 'react-native';
import { Card } from 'react-native-elements'
import ProjectDetails from './ProjectDetails';
class ProjectDescription extends React.Component{
	render(){
		return(
			 <ScrollView>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="List"
                    onPress={() => this.props.navigation.navigate('ProjectsList')}
                />
                {/* <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                /> */}
                <ProjectDetails></ProjectDetails>
                <Text style={{marginBottom: 10}}>
                    Mission description.
                </Text>
                <Text style={{marginBottom: 10}}>
                    First description.
                </Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
			</ScrollView>
			)
	}
}
export default ProjectDescription;
