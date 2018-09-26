import React from 'react';
import {TouchableOpacity} from 'react-native';
import ProjectDetails from './ProjectDetails';
class ProjectTouchable extends React.Component{
	render(){
		return(
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectDescription', {itemId: 1})}>
        <ProjectDetails></ProjectDetails>
        </TouchableOpacity>
			)
	}
}
export default ProjectTouchable;
