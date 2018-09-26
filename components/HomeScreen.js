import React from 'react';
import {View,Text,Image,StyleSheet,Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HeaderFictif from './HeaderFictif';
class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home</Text>
          <HeaderFictif/>
        </View>
      );
    }
}
    
export default HomeScreen;
