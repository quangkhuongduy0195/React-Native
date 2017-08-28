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
  View,
  ListView, 
  Platform
} from 'react-native';
import SqlService from './src/SqlService'

export default class DemoConnectSQLite extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataS: new ListView.DataSource({rowHasChanged: (r1, r2) => r1._id !== r2._id})
    }
    // SqlService.query('DROP TABLE test').then(res =>{

    // });

    SqlService.query('CREATE TABLE IF NOT EXISTS test (_id INTEGER primary key, name text)').then(res =>{
      SqlService.insert('test',['name'],['Duy']).then(res =>{
        SqlService.select('test','*').then(rs =>{
          this.setState({
            dataS: this.state.dataS.cloneWithRows(rs)
          })
          for(var user of rs){
            console.log(user);
            console.log('id: ' + user._id + ' name: ' + user.name)
            
          }
        });
      });
    }); 
  }

  createRow = (variable) => {
    return(
      <View style={{flex: 1, paddingTop:20, paddingLeft:20, flexDirection: 'row'}}>
        <Text style={{flex: 1}}>ID: {variable._id}</Text>
        <Text style={{flex: 1}}>NAME: {variable.name}</Text>
      </View>
    );
  }


  render() {
    
    
    switch(Platform.OS){
      case 'ios':{
        return (
          <View style={styles.container}>
            
          </View>
        );
      }
      case 'android': {
        return (
          <View style={styles.container}>
            <ListView style={{flex: 1}} dataSource={this.state.dataS} renderRow={this.createRow}/>
          </View>
        );
      }
    }
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

AppRegistry.registerComponent('DemoConnectSQLite', () => DemoConnectSQLite);
