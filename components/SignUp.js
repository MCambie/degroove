import React from 'react';
import {ScrollView, View,Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, SearchBar, Button, CheckBox} from 'react-native-elements'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import {Input, Label, Form, Item, ListItem, Body, Icon} from 'native-base';
import ProjectDetails from './ProjectDetails';
import HeaderFictif from './HeaderFictif';
import HeaderDGR from './Header';
import app from './firebaseAuth';
import base from './firestore';
import 'firebase/auth';

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
              <HeaderDGR pageName={"Profile"} />
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
                        <Item floatingLabel>
                        <Icon style={{color:"rgb(79, 188, 132)"}} name ='person'/>
                            <Label style={{color:"rgb(132, 134, 137)"}}>
                            First Name</Label>
                            <Input style={{color:"rgb(132, 134, 137)"}}/>
                        </Item>

                        <Item floatingLabel>
                        <Icon style={{color:"rgb(79, 188, 132)"}} name ='person'/>
                            <Label style={{color:"rgb(132, 134, 137)"}}>
                            Last Name</Label>
                            <Input style={{color:"rgb(132, 134, 137)"}}/>
                        </Item>

                        <Item floatingLabel>
                          <Icon style={{color:"rgb(79, 188, 132)"}} name='mail'/>
                          <Label style={{color:"rgb(132, 134, 137)"}}>Email</Label>
                          <Input style={{color:"rgb(132, 134, 137)"}} onChangeText={(input)=>this.emailinputChange(input)}/>
                        </Item>

                        <Item floatingLabel>
                        <Icon style={{color:"rgb(79, 188, 132)"}} name ='lock'/>
                            <Label style={{color:"rgb(132, 134, 137)"}}>Password</Label>
                            <Input style={{color:"rgb(132, 134, 137)"}} onChangeText={(input)=>this.passwordinputChange(input)}/>
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


                    <Item style = {styles.search}>
                      <Icon style={{color:"rgb(79, 188, 132)"}} name="search" />
                      <Input style={{color:"rgb(132, 134, 137)"}} placeholder="Enter your Skills" onChangeText={(input)=>this.skillinputChange(input)} />
                      <Icon style={{color:"rgb(79, 188, 132)"}} name="people" />
                    </Item>
                    </Form>
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
