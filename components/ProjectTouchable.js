import React from 'react';
import {TouchableOpacity} from 'react-native';
import ProjectDetails from './ProjectDetails';
import { withNavigation } from 'react-navigation';

class ProjectTouchable extends React.Component{
	render(){
		return(
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectDescription', {id: this.props.id, name: this.props.name, region: this.props.region, field: this.props.field, type: this.props.type, skills: this.props.skills, hours: this.props.hours})}>
        <ProjectDetails
					key = {this.props.id}
					id= {this.props.id}
					name = {this.props.name}
					region = {this.props.region}
					field = {this.props.field}
					type = {this.props.type}
					skills = {this.props.skills}
					hours = {this.props.hours}
				>
				</ProjectDetails>
        </TouchableOpacity>
			)
	}
}

export default withNavigation(ProjectTouchable);
