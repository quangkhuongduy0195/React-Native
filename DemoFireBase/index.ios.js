/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, ListView
} from 'react-native';
import firebase from './lib/api';
export default class DemoFireBase extends Component {

  constructor(props){
    super(props);
    database = firebase.database();
    user = database.ref('User');
    arrayUser = [];
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  componentWillMount(){
    database.ref('User').on('value', (snap) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(snap)
      });
      snap.forEach( (data) => {
          console.log(data.key);
          console.log(data.val());
          arrayUser.push(data.val());
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(arrayUser)
      });

    })    
  }

  renderRow = (data) => {
    return(
      <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop: 10, marginBottom: 10}}>
        {/* <Text style={{flex:1}}>Key: {this.state.dataSource.key} </Text> */}
        <Text style={{ alignItems:'center', justifyContent:'center',flex:1}}>User: {data.username} </Text>
        <Text style={{ alignItems:'center', justifyContent:'center',flex:1}}>Password: {data.password} </Text>
      </View>
    );
  }

  render() {

    // user.push({
    //   username: 'quangkhuongduy',
    //   password: 123123
    // });

    return (
      <View style={styles.container}>
       <ListView style={{flex:1, backgroundColor: 'green', marginTop: 20}} dataSource={this.state.dataSource} renderRow={this.renderRow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DemoFireBase', () => DemoFireBase);
