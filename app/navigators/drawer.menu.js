import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native';
import { Text as TextSMS } from 'react-native-openanything';
import { connect } from 'react-redux';
import { getUser } from '../selectors/user.selector';
import { colors } from '../constants/colors';
import UserActions from '../reducers/user/user.action';

type Props = {
  navigation: {
    navigate: Function,
    dispatch: Function,
  },
};

const _styles = (userType = 'seculacer') => StyleSheet.create({
    mainContainer : {
        backgroundColor : colors[userType].main,
        flex : 1,
    },
    linksScrollBar : {
        flex  : 1,
    },
    subOptions : {
    },
    subOptionTxt : {
        color : colors.fontColor,
    },
    navLink : {
        padding : 10,
        paddingLeft : 50,
        fontSize : 15,
        color : colors.fontColor,
    },
});
const drawerLinks = {
    seculacer : [
        {label : 'CONTROL NECKLACE', path : 'ControlDevice'},
        {label : 'WHITE PANE', path : 'WhitePane'},
        {label : 'NOTIFICATION', path : 'Notifications'},
        {
            label : 'MESSAGES',
            path : 'Messages',
            onPress : () => TextSMS('09771634283'),
            onPress : () => TextSMS('09569006808', 'zxc'),
        },
        {label : 'CONTACTS', path : 'Contacts'},
        {label : 'VIP', path : 'VIP'},
    ],
    responder : [],
};


class DrawerMenu extends React.Component<Props> {
    constructor(props){
        super(props);
        const { navigation } = props;
        navigation.setParams({ user : { ...props.user }});
        
    }
    onPressLogout = () => {
        const { navigation, logout } = this.props;
        logout();
        navigation.navigate('Login');
    }
    render() {
        const { navigation, user } = this.props;
        if(!user) return null;
        const currentPath = navigation.getParam('currentPath', null);
        const userType = user.type;
        const styles = _styles(userType || 'seculacer');
        const userLinks = drawerLinks[userType];

        return (
            <View style={styles.mainContainer}>
                <View style={{backgroundColor : colors[userType].mainHeader,width:'100%',height : 100}} />
                <ScrollView>
                    {userLinks.map(userLink => (
                        <TouchableOpacity
                            onPress={userLink.onPress || (() => navigation.navigate(userLink.path))}
                        >
                            <Text style={styles.navLink}>{userLink.label}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.subOptions}>
                    <Text onPress={this.onPressLogout} style={styles.subOptionTxt}>Logout</Text>
                    <Text style={styles.subOptionTxt}>Help</Text>
                    <Text style={styles.subOptionTxt}>Settings</Text>
                    <Text style={styles.subOptionTxt}>About</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = store => ({
    user : getUser(store),
});
const mapDispatchProps = dispatch => ({
    logout : () => dispatch(UserActions.setNewUser(null)),
});

export default connect(
    mapStateToProps,
  mapDispatchProps,
)(DrawerMenu);