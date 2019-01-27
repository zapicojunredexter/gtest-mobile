import React from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';

import { colors } from '../../../constants/colors';
import TextInput from '../../../components/text.input';
import HeaderRight from '../../../components/header/header.right';
import HeaderLeft from '../../../components/header/header.left';
import Button from '../../../components/button';
import WebView from '../../../components/webview';
import { getUser } from '../../../selectors/user.selector';

type Props = {
};


const _styles = (userType = 'seculacer') => StyleSheet.create({
    digitPassCodeContainer : {
        marginTop : 70,
        marginLeft : 20,
        marginRight : 20,
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : colors.fieldSetBg,
    },
    digitPassCodeTitle : {
        color : 'orange',
        fontSize : 20,
    },
    txtFieldCode : {
        textAlign : 'center',
        fontSize : 30,
        height : 100,
        color : 'black',
    },
    mainContainer : {
        flex : 1,
    },
    headerTop : {
        backgroundColor : 'orange',
        height : 130,
    },
    headerComponentsWrapper : {
        flex : 1,
        margin : 30,
    },
    edmWrapper : {
        margin : 20,
    },
    edmHeaderTitle : {
        fontSize : 17,
        color : colors.error,
        textAlign : 'center',
    },
    edmTextBox : {
        borderColor : colors.error,
        borderWidth : 1,
        borderRadius : 3,
        backgroundColor : colors.fieldSetBg,
        padding : 5,
        marginTop : 10,
        marginBottom : 10,
    },
    edmButton : {
        backgroundColor : 'red',
        width : '70%',
        borderRadius : 3,
        alignSelf : 'center',
        padding : 5,
        margin : 10,
    },
    edmButtonTitle : {
        textAlign : 'center',
        color : colors.fontColor,
    },
});

class WhitePane extends React.PureComponent<Props> {
    static navigationOptions = ({ navigation }) => {
        const colorSets = colors[navigation.state.params && navigation.state.params.user.type || 'seculacer'];
        return ({
            title : 'WHITE PANE',
            headerTitleStyle : {
                color : colors.fontColor,
            },
            headerStyle : {
                backgroundColor : colorSets && colorSets.mainHeader,
            },
            headerRight : <HeaderRight />,
            headerLeft : <HeaderLeft />
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            isMapShown : true,
        };

        const { navigation } = props;
        navigation.setParams({ user : { ...props.user }});
    }
    renderEnterPassCode = () => {
        const styles = _styles();
        return (
            <View style={styles.digitPassCodeContainer}>
                <Text style={styles.digitPassCodeTitle}>ENTER 4 DIGIT PASS CODE</Text>
                <TextInput placeholder="_ _ _ _" style={styles.txtFieldCode}/>
            </View>
        );
    }

    renderEDMBody = () => {
        const styles = _styles();
        return (
            <View style={styles.edmWrapper}>
                <Text style={styles.edmHeaderTitle}>Emergency Distress Message</Text>
                <TextInput placeholder="Type message" style={styles.edmTextBox}/>
                <Button style={styles.edmButton} titleStyle={styles.edmButtonTitle} title="EMERGENCY SEND" />
                <View style={{flexDirection : 'row',alignItems : 'center'}}>
                    <View style={{ flex : 1, height : 3, margin : 5, backgroundColor : 'silver'}}/>
                    <Text style={styles.edmHeaderTitle}>Emergency Distress Message</Text>
                    <View style={{ flex : 1, height : 3, margin : 5, backgroundColor : 'silver'}}/>
                </View>
            </View>
        );
    }

    renderMapBody = () => {
        return (
            <View style={{flex:1}}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    source={{uri: 'https://www.google.com/maps/place/Cebu+City,+Cebu/@10.3901115,123.75039,11.44z/data=!4m5!3m4!1s0x33a999258dcd2dfd:0x4c34030cdbd33507!8m2!3d10.3156992!4d123.8854366'}}
                    style={{flex : 1,margin : 15}}
                />
            </View>
        );
    }

    render() {
        const isPassCoded = true;
        const styles = _styles();
        const { isMapShown } = this.state;

        if( !isPassCoded ) {
            return this.renderEnterPassCode();
        }
        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerTop}>
                    <Image
                        style={{
                            flex: 1,
                            resizeMode : 'cover',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                        }}
                        source={require('../../../assets/images/googlemapsbg.jpg')}
                    />
                    <View style={styles.headerComponentsWrapper}>
                        <TextInput placeholder="LOCATION" style={{backgroundColor : 'rgba(122, 122, 214, 0.5)'}}/>
                        <Button onPress={() => this.setState({isMapShown : !isMapShown})}><Text style={{textAlign : 'right'}}>Toggle map</Text></Button>
                    </View>
                </View>
                { isMapShown ? this.renderEDMBody() : this.renderMapBody() }
            </View>
        );
    }
}
const mapStateToProps = store => ({
    user : getUser(store),
});
const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WhitePane);
