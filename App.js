 'use strict';

import React, { Component } from 'react';
import { 
  	NavigatorIOS,
  	StyleSheet, 
 } from 'react-native';
import ContentView from './ContentView';

type Props = {};

export default class NavController extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'React Native Playground',
          component: ContentView,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
});
