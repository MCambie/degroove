import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements'
class ProjectDetails extends React.Component{
	render(){
		return(
			 <View style={styles.container}>
                {/* <Card 
                // lexDirection="row"
                containerStyle={{backgroundColor:"pink"}}
                wrapperStyle={{backgroundColor:"purple"}}
                title='HELLO WORLD'
                image={require('../assets/picsum.jpg')}
                imageStyle={{width:"50%",float:"left"}}
                imageWrapperStyle={{padding:0}}> */}
                <Image style={styles.image} source={{uri: 'https://picsum.photos/200/300/?random'}} ></Image>
                <View style={styles.inside}>
                    <Text style={styles.title}>Project description</Text>
                    <Text>Name</Text>
                    <Text>Region</Text>
                    <Text>Field</Text>
                    <Text>Type</Text>
                    <Text>Skills</Text>
                    <Text>Hours</Text>
                </View>
                {/* <Button
                    icon={{name: 'code'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' /> */}
                {/* </Card> */}
			</View>
			)
	}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: "row",
      padding: 10,
      marginBottom: 30,
      //   width: "100%",
    //   overflow:"scroll",
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        color: "#4fbc84",
    },
    inside: {
        flex: 1,
        // flexDirection: "column",
        paddingTop: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,
    },
    image: {
        flex: 1,
        // width: 80,
        // height: 80,
        margin: 0,
        alignItems: "center",
    }
})
  
export default ProjectDetails;
