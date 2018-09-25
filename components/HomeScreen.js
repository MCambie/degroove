import React from 'react';
import {View,Text,Image,StyleSheet,Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
                    title="Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="List"
                    onPress={() => this.props.navigation.navigate('ProjectsList')}
                />
                <Button
                    title="Descr"
                    onPress={() => this.props.navigation.navigate('ProjectDescription')}
                />
        </View>
      );
    }
}
    
export default HomeScreen;
