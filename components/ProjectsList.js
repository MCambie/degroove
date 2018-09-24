import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements'
import ProjectDetails from './ProjectDetails';
class ProjectDescription extends React.Component{
	render(){
		return(
			 <View>
                <ProjectDetails style={styles.container}></ProjectDetails>
                <ProjectDetails style={styles.container}></ProjectDetails>
                <ProjectDetails style={styles.container}></ProjectDetails>
                {/* <Text style={{marginBottom: 10}}>
                    Mission description.
                </Text>
                <Text style={{marginBottom: 10}}>
                    First description.
                </Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' /> */}
			</View>
			)
	}
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: 'blue',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    }
})
  
export default ProjectDescription;
