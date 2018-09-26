import React from 'react';
import {View,Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, SearchBar, Button, CheckBox, FormLabel} from 'react-native-elements'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import {Input, Label, Form, Item, ListItem, Body} from 'native-base';
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
            checkBox11 : false,
            collapsed : false
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
                    <Form>
                        <Item floatingLabel>
                            <Label>First Name</Label>
                            <Input />
                        </Item> 

                        <Item floatingLabel>
                            <Label>Last Name</Label>
                            <Input />
                        </Item> 

                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item> 

                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item> 

                        <FormLabel>Region</FormLabel>
                            <Collapse isCollapsed = {this.state.collapsed}>
                                <CollapseHeader>
                                    <View>
                                        <Button
                                            title= "Choose"
                                            onPress = {() => this.setState({collapsed:!this.state.collapsed                                                  })}
                                        /> 
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
                    </Form>
                

                    {/* 

                    >
                    
                    <FormLabel>Skills</FormLabel>
                    <SearchBar
                        lightTheme
                        platform="android"
                        placeholder='Search' 
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>  */}
                </View> 

                <Button
                 title='Create an account'
                 backgroundColor = 'rgb(79, 188, 132)'  
                 style = {{
                    width : 200,
                 }}         
                /> 
            </View>      
		);
	}
}

const styles = StyleSheet.create({
    container :{
        flex : 1, 
        marginBottom : 400
    //    alignItems : "center"
    },
    title : {
       fontSize : 20
    },
})
export default SignUp;