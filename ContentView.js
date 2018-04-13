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
  Image,
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
            {key: 'Devin', image: ''},
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
          	<Image source={{uri:"https://static1.squarespace.com/static/5534792ee4b0aca1f6648401/5a11f83b0d9297779571897d/5a43c6bd652dea22a557a7fa/1514391246257/05-Kendra.jpg"}} style={{width: 78, height: 110}}/>
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
