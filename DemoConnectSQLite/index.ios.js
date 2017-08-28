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
  View
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';


export default class DemoConnectSQLite extends Component {
  
  errorCB(err) {
      console.log("SQL Error: " + err);
    }
    
    successCB() {
      console.log("SQL executed fine");
    }
    
    openCB() {
      console.log("Database OPENED");
    }

  constructor(props){
    super(props);
    
    
    var db = SQLite.openDatabase("test.sqlite", "1.0", "Test Database", 200000, this.openCB, this.errorCB);
    var db = SQLite.openDatabase({name : "test.sqlite", location: 'default'});
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM t', [], (tx, results) => {
          console.log("Query completed");
    
          // Get rows with Web SQL Database spec compliance.
    
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`);
          }
    
          // Alternatively, you can use the non-standard raw method.
    
          /*
            let rows = results.rows.raw(); // shallow copy of rows Array
    
            rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
          */
        });
    });

    


  }




  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
