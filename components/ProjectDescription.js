import React from 'react';
import {View,Text,Image, StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements'
import ProjectDetails from './ProjectDetails';
import FooterDGR from './Footer';
class ProjectDescription extends React.Component{
	render(){
		return(
			 <View>
								 <View style={styles.header}>
									 <Text>
										 Project List
									 </Text>
									 <Button
									 icon={{name: 'exit_to_app'}}
									 />
								 </View>
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
									<FooterDGR/>
			</View>
			)
	}
}
export default ProjectDescription;
const styles = StyleSheet.create({
    header: {
					flex: 1,
					width: '100%',
					backgroundColor: 'rgb(79, 188, 132)',
					color: 'white'
    }
})
