import React from 'react';
import {View,Text,Button} from 'react-native';
class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="List"
                    onPress={() => this.props.navigation.navigate('ProjectsList')}
                />
                <Button
                    title="Descr"
                    onPress={() => this.props.navigation.navigate('ProjectDescription')}
                />
          <Text>Details Screen</Text>
        </View>
      );
    }
}
export default DetailsScreen;
