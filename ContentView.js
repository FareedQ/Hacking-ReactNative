'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import hello from './hello';

export default class ContentView extends Component<{}> {
	constructor(props) {
  	  super(props);
  	  this.state = {};
	}

	_onSearchPressed = () => {
	    this.props.navigator.push({title: 'Results', component: hello, passProps: {}});
	};

  render() {
    return (
      <View style={styles.container}>
      	<Text>Hey</Text>
        <Button onPress={this._onSearchPressed} color='#48BBEC' title='Go' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
});