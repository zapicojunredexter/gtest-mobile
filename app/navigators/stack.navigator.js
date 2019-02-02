import React from 'react';
import Text from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import InitialRoute from './InitialRoute';
import { ControlDevice, Contacts, Messages, Notifications, VIP, WhitePane, EDM } from '../containers/home';
import Login from '../containers/authentication/login';
import Registration from '../containers/authentication/registration';
import DrawerMenu from './drawer.menu';
import HeaderLeft from '../components/header/header.left';
import HeaderRight from '../components/header/header.right';
import { colors } from '../constants/colors';
const AuthenticationStack = createStackNavigator({
    Login : {
        screen : Login,
    },
    Registration : {
        screen : Registration,
    },
});

const MainStack = createStackNavigator({
    ControlDevice: {
        screen: ControlDevice,
        navigationOptions : {
            title : 'SECULACE'
        }
    },
    Contacts: {
        screen: Contacts,
        navigationOptions : {
            title : 'CONTACTS'
        }
    },
    Messages: {
        screen: Messages,
        navigationOptions : {
            title : 'MESSAGES'
        }
    },
    Notifications: {
        screen: Notifications,
        navigationOptions : {
            title : 'NOTIFICATIONS'
        }
    },
    VIP: {
        screen: VIP,
        navigationOptions : {
            title : 'VIP'
        }
    },
    WhitePane: {
        screen: WhitePane,
        navigationOptions : {
            title : 'WHITE PANE'
        }
    },
    EDM : {
        screen: EDM,
        navigationOptions : {
            title : 'SECULACE'
        }
    },
},

{
    // headerMode: 'none',
    navigationOptions : ({ navigation }) => {
        return ({
            headerTitleStyle : {
                color : colors.fontColor,
            },
            headerRight : <HeaderRight navigation={navigation} />,
            headerLeft : <HeaderLeft />
        });
    },
  }
);


const HomeStack = createDrawerNavigator({
    Home: {
        screen: MainStack,
    },
},
{
    contentComponent: props => <DrawerMenu {...props} />,
});

const StackNavigator = createStackNavigator(
  {
    InitialRoute : { screen: InitialRoute },
    Authentication : { screen : AuthenticationStack },
    Home : { screen : HomeStack }
  },
  {
    headerMode: 'none',
    navigationOptions: {
    },
  },
);

export default StackNavigator;
