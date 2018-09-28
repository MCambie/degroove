import React from 'react';
import {View,Text,Image, StyleSheet,ScrollView} from 'react-native';
import {Button, CheckBox} from 'react-native-elements'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import {Input, Label, Form, Item, ListItem, Body, Icon} from 'native-base';
import ProjectDetails from './ProjectDetails';
import HeaderFictif from './HeaderFictif';
import app from './firebaseAuth';
import base from './firestore';
import 'firebase/auth';

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
            email: '',
            password: '',
            region : [],
            skill : []
        }
    }

    emailinputChange(input) {
      this.setState({email: input});
    }

    skillinputChange(input) {
      var delimiter = [];
      input ? delimiter = input.split(" ") : dellimiter = [];
      this.setState({skill: delimiter});
    }

    passwordinputChange(input) {
      this.setState({password: input});
    }

    submitNewUser() {
      app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }

    submitNewUserAndFirestoreDocument() {
      var email = this.state.email;
      var region = this.state.region;
      var skills = this.state.skill;
      skills.forEach((text) => {
        alert(text);
      })
      base.addToCollection('users', {email: email, region: region, skills: skills})
      .then(() => {
        //document is added to the collection
      }).catch(err => {
      //handle error
      });
      this.submitNewUser();
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
                          <Label>Email</Label>
                          <Input onChangeText={(input)=>this.emailinputChange(input)}/>
                        </Item>

                        <Item floatingLabel>
                        <Icon name ='lock'/>
                            <Label>Password</Label>
                            <Input onChangeText={(input)=>this.passwordinputChange(input)}/>
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
                                        onPress = {() => this.setState({collapsed:!this.state.collapsed})}
                                    />
                                </View>
                                </CollapseHeader>
                                <CollapseBody>
                                <CheckBox
                                    title = 'Antwerp'
                                    checked = {this.state.checkBox1}
                                    onPress={() => this.setState({checkBox1:!this.state.checkBox1, region: this.state.region.concat("Antwerp")})}
                                />
                                <CheckBox
                                    title = 'Brussels'
                                    checked = {this.state.checkBox11}
                                    onPress={() => this.setState({checkBox11:!this.state.checkBox11, region: this.state.region.concat("Brussels")})}

                                />
                                <CheckBox
                                    title = 'East Flanders'
                                    checked = {this.state.checkBox2}
                                    onPress={() => this.setState({checkBox2:!this.state.checkBox2, region: this.state.region.concat("East Flanders")})}
                                />
                                <CheckBox
                                    title = 'Flemish Brabant'
                                    checked = {this.state.checkBox3}
                                    onPress={() => this.setState({checkBox3:!this.state.checkBox3, region: this.state.region.concat("Flemish Brabant")})}
                                />
                                <CheckBox
                                    title = 'Limburg'
                                    checked = {this.state.checkBox4}
                                    onPress={() => this.setState({checkBox4:!this.state.checkBox4, region: this.state.region.concat("Limburg")})}
                                />
                                <CheckBox
                                    title = 'West Flanders'
                                    checked = {this.state.checkBox5}
                                    onPress={() => this.setState({checkBox5:!this.state.checkBox5, region: this.state.region.concat("West Flanders")})}
                                />
                                <CheckBox
                                    title = 'Hainaut'
                                    checked = {this.state.checkBox6}
                                    onPress={() => this.setState({checkBox6:!this.state.checkBox6, region: this.state.region.concat("Hainaut")})}
                                />
                                <CheckBox
                                    title = 'Liège'
                                    checked = {this.state.checkBox7}
                                    onPress={() => this.setState({checkBox7:!this.state.checkBox7, region: this.state.region.concat("Liège")})}
                                />
                                <CheckBox
                                    title = 'Luxembourg'
                                    checked = {this.state.checkBox8}
                                    onPress={() => this.setState({checkBox8:!this.state.checkBox8, region: this.state.region.concat("Luxembourg")})}
                                />
                                <CheckBox
                                    title = 'Namur'
                                    checked = {this.state.checkBox9}
                                    onPress={() => this.setState({checkBox9:!this.state.checkBox9, region: this.state.region.concat("Namur")})}
                                />
                                <CheckBox
                                    title = 'Walloon Brabant'
                                    checked = {this.state.checkBox10}
                                    onPress={() => this.setState({checkBox10:!this.state.checkBox10, region: this.state.region.concat("Walloon Brabant")})}
                                />
                            </CollapseBody>
                        </Collapse>
                    </Form>

                    <Item style = {styles.search}>
                      <Icon name="search" />
                      <Input placeholder="Skills" onChangeText={(input)=>this.skillinputChange(input)} />
                      <Icon name="people" />
                    </Item>

                    <View style = {styles.button}>
                        <Button
                        title='Create an account'
                        onPress={()=>this.submitNewUserAndFirestoreDocument()}
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
