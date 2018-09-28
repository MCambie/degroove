import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import HeaderFictif from './HeaderFictif';
import PasswordInput from './PasswordInput';
import SignUpButton from './SignUpButton';
import UpdateProfileButton from './UpdateProfileButton';
class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1}}>
          <Text>Details Screen</Text>
          <HeaderFictif navigation={this.props.navigation}/>
          <PasswordInput style={{width:200}}/>
          <SignUpButton style={styles.click}/>
          <UpdateProfileButton style={styles.click}/>
        </View>
      );
    }
}
const styles=StyleSheet.create({
	click:{
        margin: 30,
        width: 200,
    },
})
export default DetailsScreen;
