import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import detailsScreens from './screens/detailsScreens';
import HomeScreen1 from './screens/HomeScreen1';
import detailsScreens1 from './screens/detailsScreens1';





// const DemoNavigationTab = TabNavigator({
//   Home: {screen: HomeScreen1},
//   Details: {screen: detailsScreens1}
// },
// {
//   swipeEnabled: true,
//   tabBarPosition: 'bottom',
//   animationEnabled:true,
//   tabBarOptions:{
//     activeTintColor:'#00695C',
//     inactiveTintColor:'#B2DFDB',
//     inactiveBackgroundColor:'#E8F5E9',
//     activeBackgroundColor:'#A5D6A7',
//     pressColor:'#80CBC4',//android
//     showIcon: true,//android
//     pressOpacity:1,//android
//     labelStyle:{
//       fontSize:14
//     },
//     style: {
//       backgroundColor: '#E0F2F1',
//     },
//     showLabel: false
//   }
// }); 

const MyStackNavigation = StackNavigator({
  Home: {screen: HomeScreen},
  Details: {screen: detailsScreens}
});


// const DemoNavigation = StackNavigator({
//   Home: {screen: HomeScreen},
//   // Details: {screen: detailsScreens}
// });

// const MyDrawerNavigator = DrawerNavigator({
//   Home: {screen: DemoNavigation},
//   Details: {screen: detailsScreens}
// });




export default MyStackNavigation;
 