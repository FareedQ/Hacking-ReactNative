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
  contentView: {
   flex: 1,
   paddingTop:60,
  },
  container: {
   flex: 1,
  },
  myButton: {
  	padding: 20,
  	backgroundColor: '#b2f333',
  	borderWidth: 2,
  	borderColor: '#cccccc',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bigblue: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  loginScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
});
