import React from 'react';
import {View,Text,Image,StyleSheet,Button,ScrollView,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements'
import ProjectDetails from './ProjectDetails';
import FooterDGR from './Footer';
class ProjectDescription extends React.Component{
	render(){
		return(
			 <View>
				 				<View style={styles.header}>
									<Text style={styles.title} >
										Project List
									</Text>
									<Button style={styles.exit}
									icon={{name: 'input'}}
									backgroundColor= 'rgb(79, 188, 132)'
									/>
								</View>
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
										<FooterDGR/>
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
	},
		header: {
				flex: 1,

				backgroundColor: 'rgb(79, 188, 132)',
				alignItems: 'center',
				justifyContent: 'space-between',
				flexDirection:'row'
			},
		title: {
			marginLeft: 10,
				color: 'white',
		},
		exit: {
				color: 'white',
				justifyContent: 'flex-end'
				}
})

export default ProjectDescription;
