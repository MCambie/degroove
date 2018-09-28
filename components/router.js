import React from 'react'
import {StyleSheet,Text,View} from 'react-native'
import ProjectDescription from './ProjectDescription';
import ProjectsList from './ProjectsList';

// import { NativeRouter, Route, Link } from 'react-router-native'
import { createStackNavigator } from 'react-navigation';
// import ProjectDetails from './ProjectDetails';

const RootStack = createStackNavigator(
    {
      Home: ProjectsList,
      Details: ProjectDescription,
    },
    {
      initialRouteName: 'Home',
    }
  );
  