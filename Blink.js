import React, { Component } from 'react';
import {
  	StyleSheet, 
	Text, 
	} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.bigblue}>{display}</Text>
    );
  }
}


const styles = StyleSheet.create({
  bigblue: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});