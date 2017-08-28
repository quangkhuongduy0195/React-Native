import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class Person extends Component{

    render(){
        return(
            <View>
                <Text> Ten: {this.props.name} - Tuoi: {this.props.old} </Text>
            </View>
        );
    }
}

Person.defaultProps = {
    name: 'Someone',
    old: 1
}
Person.PropTypes = {
    name: PropTypes.string,
    old: PropTypes.number
}


export default class DefaultPropsPropTypes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Person name='Duy' old='213' />
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