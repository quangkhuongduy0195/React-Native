import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class detailsScreens extends Component {

    componentWillMount() {
      console.log('componentWillMount1');
      
    }
    componentDidMount() {
      console.log('componentDidMount1');
    }
    componentWillUnmount() {
      console.log('componentWillUnmount1');
    }
    componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps1');
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate1');
    }
    
    componentWillUpdate(nextProps, nextState) {
      console.log('componentWillUpdate1');
    }  
    componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate1');
    }




    render() {

        const {params} = this.props.navigation.state;
        const { goBack } = this.props.navigation;

        return (
        <View style={styles.container}>
            {/* <Text> {params.name} </Text> */}
            <Button title='Back' onPress={() =>{
                goBack();
            }}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1F5FE',
  }
});