import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import base from './components/firestore';

import Displaytest from './components/displaytest';

import NewUser from './components/NewUser';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      searchStringUser: ""
    };
  }

  searchInputChange(input) {
    this.setState({searchStringUser: input});
    console.log(this.state.searchStringUser);
  }

  componentDidMount() {
    var test = base.get('/projects', {context: this, withIds: true});
    test.then(function(value) {
      this.setState({projects: value});
    }.bind(this));
  }

  render() {
    const projectFilter = this.state.projects.filter((searchText) => {
      let search = searchText.region;
      return search.match(this.state.searchStringUser);
    })

    const projectTest = projectFilter.map((test) => {
      return (
        <Displaytest key = {test.id} testme = {test.region} />
      )
    });
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <NewUser function={(input)=>this.searchInputChange(input)} text={this.state.searchStringUser}/>
        {projectTest}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
