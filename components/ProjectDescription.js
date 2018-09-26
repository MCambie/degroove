import React from 'react';
import {View,Text,Image,Button,ScrollView} from 'react-native';
import { Card } from 'react-native-elements'
import ProjectDetails from './ProjectDetails';
import HeaderFictif from './HeaderFictif';
class ProjectDescription extends React.Component{
	render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        return(
			 <ScrollView>
                <HeaderFictif navigation={this.props.navigation}/>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
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
