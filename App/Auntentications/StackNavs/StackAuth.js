import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import DrawerNav from '../DrawerNavs/DrawerNavigation';
import { createAppContainer } from 'react-navigation';
const StackNavigator = createStackNavigator({
    DrawerNavigation: DrawerNav
}, {
    initialRouteName: 'DrawerNavigation',
    headerMode: 'none'
})
const StackNav = createAppContainer(StackNavigator);
export default StackNav;