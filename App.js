import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ProjectDescription from './components/ProjectDescription';
import ProjectsList from './components/ProjectsList';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <ProjectDescription></ProjectDescription> */}
        {/* <ProjectsList></ProjectsList> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
