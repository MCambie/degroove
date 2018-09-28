import React from 'react';
import {View,Text,Image, StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import {Card, SearchBar, Button, CheckBox} from 'react-native-elements'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import {Input, Label, Form, Item, ListItem, Body, Icon} from 'native-base';
import ProjectDetails from './ProjectDetails';
import HeaderDGR from './Header';



class SignUp extends React.Component{
    static navigationOptions={header:null}
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

    onFocus() {
        this.setState({
            backgroundColor: "rgb(79, 188, 132)"
        })
    }

    onBlur() {
        this.setState({
            backgroundColor: "rgb(79, 188, 132)"
        })
    }

	render(){
		return(
            <ScrollView style = {styles.container}>
                <HeaderDGR pageName={"Profile"}/>
                <View style = {styles.image}>
                    <Image 
                        style={{width: 150, height: 150, borderRadius : 75, marginTop: 20}}
                        source={require('../assets/logo.png')}
                    />
                    <Text style={styles.title}>
                        Change profile picture
                        
                    </Text>
                    <View style = {styles.profile}>
                        <Icon style={{color:"rgb(79, 188, 132)",flex:1,textAlign:"center"}} name ='camera'/>
                        <Icon style={{color:"rgb(79, 188, 132)",flex:1,textAlign:"center"}} name ='image'/>
                    </View>
                </View>
              
                
                <View>
                    <Text style={styles.required}>
                        Please complete all the fields below.
                    </Text>
                    <Form style={{padding: 30}}>
                        <Item
                        floatingLabel>
                        <Icon style={{color:"rgb(79, 188, 132)"}} name ='person'/>
                            <Label style={{color:"rgb(132, 134, 137)"}} >          
                            First Name</Label>
                            <Input style={{color:"rgb(132, 134, 137)"}}
                                onFocus={()=>this.onFocus()}
                                onBlur={()=>this.onBlur()}
                             />
                        </Item>

                        <Item floatingLabel >
                        <Icon style={{color:"rgb(79, 188, 132)"}} name ='person'/>
                            <Label style={{color:"rgb(132, 134, 137)"}}> 
                            Last Name</Label>
                            <Input style={{color:"rgb(132, 134, 137)"}} />
                        </Item>

                        <Item floatingLabel>
                        <Icon style={{color:"rgb(79, 188, 132)"}} name='mail'/>
                            <Label style={{color:"rgb(132, 134, 137)"}}>
                           Email</Label>
                            <Input style={{color:"rgb(132, 134, 137)"}} keyboardType="email-address"/>
                        </Item>

                        <Item floatingLabel>
                        <Icon style={{color:"rgb(79, 188, 132)"}} name ='lock'/>
                            <Label style={{color:"rgb(132, 134, 137)"}}>Password</Label>
                            <Input style={{color:"rgb(132, 134, 137)"}} secureTextEntry={true}/>
                        </Item> 

                        <Item style = {styles.region}>
                        <Icon style={{color:"rgb(79, 188, 132)"}} name ='paper-plane'/>
                            <Label style={{color:"rgb(132, 134, 137)"}}>Region</Label>
                        </Item>
                        <Collapse isCollapsed = {this.state.collapsed}>
                            <CollapseHeader>
                                <View>
                                    <Button 
                                        title= "Click and select your working area"
                                        backgroundColor = 'rgb(240,240,240)'
                                        color = 'rgb(79, 188, 132)' 
                                        buttonStyle={{marginTop: 10,borderColor : 'rgb(79, 188, 132)'}}
                                        onPress = {() => this.setState({collapsed:!this.state.collapsed                                                  })}
                                    /> 
                                </View>
                                </CollapseHeader>
                                <CollapseBody>
                                {/* <Text>Select </Text> */}
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
                        <Item style = {styles.search}>
                            <Icon style={{color:"rgb(79, 188, 132)"}} name="search" />
                            <Input placeholder="Enter your skills" placeholderTextColor="rgb(132,134,137)" style={{color:"rgb(132,134,137)"}} />
                            <Icon style={{color:"rgb(79, 188, 132)"}} name="people" />
                        </Item>
                    </Form>


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
        // padding : 30,
        backgroundColor: "#fff",
        // alignItems: 'center'
    },
    image: {
        alignItems: 'center'
    },
    
    title : {
        fontSize : 20,   
        marginTop: 10,
        color:"rgb(132, 134, 137)",
     },
 
     required : {
        fontStyle : "italic",   
        marginTop: 30,
        color:"rgb(132, 134, 137)",
        textAlign: "center",
        marginBottom: -30,
     },
 
      profile : {
        // flex : 1, 
        flexDirection : "row",
        marginTop: 10,
        // justifyContent : "flex-end",
    },

    region:{
        marginTop : 30
    }, 

    search:{
        marginTop : 10
    }, 

    button :{
        alignItems : 'center',
        marginBottom : 60,
        marginTop : 30,
    }

})
export default SignUp;
