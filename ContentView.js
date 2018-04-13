'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList, 
  TouchableHighlight, 
} from 'react-native';
import hello from './hello';

export default class ContentView extends Component<{}> {

	_navigateToNextPage = () => {
	    this.props.navigator.push({title: 'Results', component: hello, passProps: {}});
	};
	
	_renderItem = ({item, index}) => (
		<ListItem item={item} index={index} onPressItem={this._navigateToNextPage} />
	);
  
	_onPressItem = (index) => {
		console.log("Pressed row: "+index);
	};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
  		 <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={this._renderItem}
        />
        </View>
      </View>
    );
  }
}

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    const item = this.props.item;
    return (
        <View>
          <View style={styles.rowContainer}>
            <TouchableHighlight onPress={this._onPress} underlayColor='#dddddd' style={styles.buttonContainer}>
              <Text style={styles.title}
                numberOfLines={1}>{item.key}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.separator}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex:1,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  buttonContainer: {
  	backgroundColor: 'green',
  	flex: 1,
  	margin: 10,
  	padding: 20,
  	alignItems: 'center',
  	borderRadius:10,
    borderWidth: 1,
    borderColor: '#656565',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  
});
