import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button, 
  Image,
  TouchableOpacity
} from 'react-native';

class Menu extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('DrawerOpen')}} >
                    
                </TouchableOpacity>
            </View>
        );
    }
}


export default class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Home - Demo Navigation', 
        headerTintColor: 'red',
        headerLeft: <Menu navigation={navigation}/>
    });


    nextDetails = () =>{
        const {navigate} = this.props.navigation;
        navigate('Details', {name:'React Native'});
    }

    componentWillMount() {
        console.log('componentWillMount');
        // setTimeout(function() {
        //     const {navigate} = this.props.navigation;
        //     navigate('Details', {name:'React Native'});
        // }, 1000);
        
      }
      componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            const {navigate} = this.props.navigation;
            navigate('Details', {name:'React Native'});
        }, 5000);

      }
      componentWillUnmount() {
        console.log('componentWillUnmount');
      }
      componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        
      }
      
      componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
      }  
      componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
      }




    render() {

        return (
        <View style={styles.container}>
            <Button title='Details' onPress={this.nextDetails}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1BEE7',
  }
});