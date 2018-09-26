import React from 'react';
import {ScrollView,Text,StyleSheet,View} from 'react-native';
import ProjectTouchable from './ProjectTouchable';
import FooterDGR from './Footer';
class ProjectDescription extends React.Component{
	render(){
		return(
			 <ScrollView>
                <Text style={styles.header}>
                    Project List
                </Text>
                <ProjectTouchable></ProjectTouchable>
                <ProjectTouchable></ProjectTouchable>
                <ProjectTouchable></ProjectTouchable>
                <FooterDGR/>
			</ScrollView>
			)
	}
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        width: '100%',
        backgroundColor: 'rgb(79, 188, 132)',
        color: 'white'
    }
})

export default ProjectDescription;
