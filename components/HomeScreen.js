import React from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Card, CardItem } from "native-base";
import HeaderFictif from './HeaderFictif';
// import SideBar from './SideBar';
class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home</Text>
          {/* <HeaderFictif/> */}
          {/* <Container>
            <Header>
              <Left>
                <Button
                  transparent
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Text>HomeScreen</Text>
              </Body>
              <Right />
            </Header>
            <Content >
                    <Text>Chat App to talk some awesome people!</Text>
            </Content>
        </Container> */}
        </View>
      );
    }
}
    
export default HomeScreen;
