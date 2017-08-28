import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import MyProgressBar from './component/progressBar'
import MyRefreshControl from './component/refreshcontrol'

export default class DemoComponents extends Component {
      render() {
        return (
            <View style={styles.container}>
                <MyProgressBar ></MyProgressBar>
                <MyRefreshControl></MyRefreshControl>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
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