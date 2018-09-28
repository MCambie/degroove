import React from 'react';
import {ScrollView,Text,StyleSheet,View} from 'react-native';
import ProjectTouchable from './ProjectTouchable';
import FooterDGR from './Footer';
import HeaderDGR from './Header';
class ProjectsList extends React.Component{
    static navigationOptions={header:null}
	render(){
		return(
            <ScrollView style={{flex:1}}>
                <HeaderDGR pageName={"Projects list"}/>
                {/* <Text style={styles.header}>
                    Project List
                </Text> */}
                <ProjectTouchable></ProjectTouchable>
                <ProjectTouchable></ProjectTouchable>
                <ProjectTouchable></ProjectTouchable>
                {/* <View style={{position:"absolute",bottom:0,left:0,right:0}}> */}
                <FooterDGR style={styles.footer}/>
                {/* </View> */}
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
    },
    footer: {
        position: "absolute",
        bottom: 0,
    }
})

export default ProjectsList;
