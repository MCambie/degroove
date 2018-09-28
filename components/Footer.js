import React from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import { Container, Footer, FooterTab, Icon } from 'native-base';

class FooterDGR extends React.Component{
	static navigationOptions={header:null}
	render(){
		return(
              <Footer >
                <FooterTab style={styles.footer}>
                  <Button vertical title='Profile' style={styles.button}
                  backgroundColor='rgb(79, 188, 132)'
                  underlayColor="black"
                  icon={{name: 'person'}}
                  onPress={() => this.props.navigation.navigate('Signup')}
                  >
                  </Button>
                  <Text style={styles.text}></Text>
                  <Button vertical title='Projects' style={styles.button}
                  backgroundColor='rgb(79, 188, 132)'
                  rightIcon={{name: 'book'}}
                  onPress={() => this.props.navigation.navigate('ProjectsList')}
                  >
                  </Button>
                </FooterTab>
              </Footer>
			)
	}
}
export default FooterDGR;

const styles = StyleSheet.create({
      footer :{
        backgroundColor: 'rgb(79, 188, 132)',
        alignItems: 'center',
      },
      button :{
        flex: 2,
        backgroundColor: 'rgb(79, 188, 132)',
        justifyContent: 'space-around',
        marginLeft: 50,

      },
      text :{
        height: 30,
        marginLeft: 13,
        borderWidth: 1,
        borderColor: 'white'
      }

});
