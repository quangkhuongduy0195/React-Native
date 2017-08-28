
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import I18n from 'react-native-i18n';

export default class DemoLocale extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text>{I18n.t('greeting')}</Text>
      </View>
    );
  }
}

I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi'
  },
  vi: {
    greeting: 'Xin Chào!'
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

