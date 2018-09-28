import React from 'react';
import {View,Text,Image,ScrollView,StyleSheet} from 'react-native';
import { Card,Button } from 'react-native-elements'
import ProjectDetails from './ProjectDetails';
import FooterDGR from './Footer';
import HeaderDGR from './Header';
class ProjectDescription extends React.Component{
	static navigationOptions={header:null}
	render(){
		return(
			 <View style={{flex:1}}>
                <HeaderDGR pageName={"Project Description"}/>
                <ProjectDetails></ProjectDetails>
                <Text style={{marginBottom: 10,paddingLeft: 30,paddingRight: 30}}>
                    Mission description.
                </Text>
                <Text style={{marginBottom: 10,paddingLeft: 30,paddingRight: 30}}>
                    First description.
                </Text>

                <View  style={styles.button}>
                <Button
                    // icon={{name: 'code'}}
                    backgroundColor = 'white'
                    color = "rgb(79, 188, 132)"
                    // buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    style = {{
                        width : 200,
                        marginTop : 30,
                        color : 'rgb(79, 188, 132)',
                        justifyContent : 'center'
                    }}         
                title='Apply for this mission' />
                </View>
                <View style={{position:"absolute",bottom:0,left:0,right:0}}>
                <FooterDGR/>

                </View>
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
    },
    button :{
        // alignItems : 'center',
        // marginBottom : 60,
        // marginTop : 30,
        // color : 'rgb(79, 188, 132)',
    }
})
