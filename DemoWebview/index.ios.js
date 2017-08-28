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
  WebView
} from 'react-native';

import myStyles from './myStyles';
import SplashScreen from 'react-native-splash-screen'

export default class DemoWebview extends Component {

  componentDidMount() {
      SplashScreen.hide();
  }

  render() {
    return (
      <WebView
        style={myStyles.web}
        source={{uri: 'https://techtalk.vn/'}}      
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={false}
        scrollEnabled={true}
        dataDetectorTypes={'link'}
      />
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('DemoWebview', () => DemoWebview);
