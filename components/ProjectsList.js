import React from 'react';
import {View,Text,Image,StyleSheet,Button,ScrollView,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements'
import ProjectDetails from './ProjectDetails';
import HeaderFictif from './HeaderFictif';
class ProjectDescription extends React.Component{
	render(){
		return(
			 <ScrollView>
                <HeaderFictif navigation={this.props.navigation}/>
                {/* <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Descr"
                    onPress={() => this.props.navigation.navigate('ProjectDescription')}
                /> */}
                 {/* <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                /> */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectDescription', {itemId: 1})}>
                <ProjectDetails style={styles.container}></ProjectDetails>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectDescription', {itemId: 2})}>
                <ProjectDetails style={styles.container}></ProjectDetails>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectDescription', {itemId: 3})}>
                <ProjectDetails style={styles.container}></ProjectDetails>
                </TouchableOpacity>
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
			</ScrollView>
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
