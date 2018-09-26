import React from 'react';
import {View,Text,Image, StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import {Card, SearchBar, Button, CheckBox} from 'react-native-elements'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import {Input, Label, Form, Item, ListItem, Body, Icon} from 'native-base';
import ProjectDetails from './ProjectDetails';
import HeaderFictif from './HeaderFictif';



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
            collapsed : false, 
        }
    }

	render(){
		return(
            <ScrollView style = {styles.container}>
                <View style = {styles.image}>
                    <Image 
                        style={{width: 150, height: 150, borderRadius : 75}}
                        source={require('../assets/logo.png')}
                    />
                    <Text style={styles.title}>
                        Change profile picture
                        
                    </Text>
                </View>
              
                
                <View style = {styles.form}>
                    <Form>
                        <Item floatingLabel>
                        <Icon name ='person'/>
                            <Label >          
                            First Name</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel>
                        <Icon name ='person'/>
                            <Label> 
                            Last Name</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel>
                        <Icon name='mail'/>
                            <Label>
                           Email</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel>
                        <Icon name ='lock'/>
                            <Label>Password</Label>
                            <Input/>
                        </Item> 

                        <Item style = {styles.region}>
                        <Icon name ='paper-plane'/>
                            <Label>Region</Label>
                        </Item>
                        <Collapse isCollapsed = {this.state.collapsed}>
                            <CollapseHeader>
                                <View>
                                    <Button 
                                        title= "Click"
                                        backgroundColor = 'white'
                                        color = 'rgb(79, 188, 132)' 
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

                    <Item style = {styles.search}>
                        <Icon name="search" />
                        <Input placeholder="Skills" />
                        <Icon name="people" />
                    </Item>

                    <View style = {styles.button}>
                        <Button 
                        title='Create an account'
                        backgroundColor = 'rgb(79, 188, 132)'  
                        style = {{
                            width : 200,
                            marginTop : 30,
                            justifyContent : 'center'
                        }}         
                        /> 
                    </View>
                    
                </View>   
            </ScrollView>   
		);
	}
}

const styles = StyleSheet.create({
    container :{
        flex : 1, 
        padding : 30,
    },
    form: {
        marginBottom: 80,
    },
    image: {
        alignItems: 'center'
    },

    title : {
       fontSize : 20,   
    },

    region:{
        marginTop : 30
    }, 

    search:{
        marginTop : 10
    }, 

    button :{
        alignItems : 'center'
    }

})
export default SignUp;
