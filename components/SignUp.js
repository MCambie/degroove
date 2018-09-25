import React from 'react';
import {View,Text,Image, StyleSheet} from 'react-native';
import {Card, FormLabel, FormInput, FormValidationMessage, CheckBox, SearchBar, Button } from 'react-native-elements'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import ProjectDetails from './ProjectDetails';



class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checkBox1 : false,
            checkBox2 : false,
            checkBox3 : false,
            checkBox4 : false,
            checkBox5 : false,
            checkBox6 : false, 
            checkBox7 : false,
            checkBox8 : false,
            checkBox9 : false,
            checkBox10 : false, 
            checkBox11 : false
        }
    }

	render(){
		return(
            <View style = {styles.container}>
                <Image
					style={{width: 150, height: 150, borderRadius : 75}}
					source={require('../assets/logo.png')}
				/>
                <Text style={styles.title}>
                    Change profile picture
                </Text>
                
                <View style = {styles.form}>
               
                    <FormLabel>First Name</FormLabel>
                    <FormInput/>
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>

                    <FormLabel>Last Name</FormLabel>
                    <FormInput/>
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>

                    <FormLabel>Email</FormLabel>
                    <FormInput/>
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>

                    <FormLabel>Password</FormLabel>
                    <FormInput/>
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>

                    <FormLabel>Region</FormLabel>
                    <Collapse>
                        <CollapseHeader>
                            <View>
                                <Text>Click here</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <CheckBox
                            title = 'Antwerp'
                            checked = {this.state.checkBox1}
                            onPress={() => this.setState({checkBox1:!this.state.checkBox1})}

                        />
                        <CheckBox
                            title = 'Brussels'
                            checked = {this.state.checkBox11}
                            onPress={() => this.setState({checkBox11:!this.state.checkBox11})}

                        />
                        <CheckBox
                            title = 'East Flanders'
                            checked = {this.state.checkBox2}
                            onPress={() => this.setState({checkBox2:!this.state.checkBox2})}
                        />
                        <CheckBox
                            title = 'Flemish Brabant'
                            checked = {this.state.checkBox3}
                            onPress={() => this.setState({checkBox3:!this.state.checkBox3})}
                        />
                        <CheckBox
                            title = 'Limburg'
                            checked = {this.state.checkBox4}
                            onPress={() => this.setState({checkBox4:!this.state.checkBox4})}
                        />
                        <CheckBox
                            title = 'West Flanders'
                            checked = {this.state.checkBox5}
                            onPress={() => this.setState({checkBox5:!this.state.checkBox5})}
                        />
                        <CheckBox
                            title = 'Hainaut'
                            checked = {this.state.checkBox6}
                            onPress={() => this.setState({checkBox6:!this.state.checkBox6})}
                        />
                        <CheckBox
                            title = 'Liège'
                            checked = {this.state.checkBox7}
                            onPress={() => this.setState({checkBox7:!this.state.checkBox7})}
                        />
                        <CheckBox
                            title = 'Luxembourg'
                            checked = {this.state.checkBox8}
                            onPress={() => this.setState({checkBox8:!this.state.checkBox8})}
                        />
                        <CheckBox
                            title = 'Namur'
                            checked = {this.state.checkBox9}
                            onPress={() => this.setState({checkBox9:!this.state.checkBox9})}
                        />    
                        <CheckBox
                            title = 'Walloon Brabant'
                            checked = {this.state.checkBox10}
                            onPress={() => this.setState({checkBox10:!this.state.checkBox10})}
                        />                
                        </CollapseBody>
                    </Collapse>
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                    
                    <FormLabel>Skills</FormLabel>
                    <SearchBar
                        lightTheme
                        platform="android"
                        placeholder='Search' 
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage> 
                </View> 

                <Button
                 title='button'
                 styleButton = {{
                   width : 500
                }}
               
                /> 
            </View>      
		);
	}
}

const styles = StyleSheet.create({
    container :{
        flex : 1, 
       alignItems : "center"
    },
    title : {
       fontSize : 20
    },
})
export default SignUp;