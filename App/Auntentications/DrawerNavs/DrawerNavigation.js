import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import WhatsContainer from '../../Screens/WhatsApp/WhatsContainer';
import InstaContainer from '../../Screens/Instagram/InstaContainer';
const Drawer = createDrawerNavigator({
    InstaStory: { screen: InstaContainer },
    WhatsStory: { screen: WhatsContainer }
}, {
    initialRouteName: 'InstaStory',
    headerMode: 'none'
})
const DrawerNav = createAppContainer(Drawer);
export default DrawerNav;