import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import AuthService from '../../../services/auth.service';

class Registration extends React.Component<> {
    state = {
        username : '',
        password : '',
    }
    render() {
        return (
        <View>
            <TextInput
                onChangeText={(text) => this.setState({ username : text })}
                value={this.state.username}
                style={{width : '100%'}}
            />
            <TextInput
                onChangeText={(text) => this.setState({ password : text })}
                value={this.state.password}
                style={{width : '100%'}}
            />
            <Text>You are in REGISTRATION PAGE</Text>
            <Button title="REGISTER"
                onPress={() => {
                    // try{
                        this.props.registerAccount(this.state.username,this.state.password,{name : "now", age : 21, gender : "M"}).catch(error => alert(error.message));
                        // this.props.registerAccount("now@gmail.com","nowgmail",{name : "now", age : 21, gender : "M"}).catch(error => alert(error.message));
                        // this.props.registerAccount({
                        //     username : 'testUsername',
                        //     password : 'testPassword',
                        // }).then(res => alert("SUCCESS")).catch(error => alert(error.message));
                    // }catch(err){
                    //     alert("ZXCs"+err.message);
                    // }
                }}
            />
        </View>
        );
    }
}
const mapStateToProps = store => ({
});
const mapDispatchToProps = dispatch => ({
    login : (params) => dispatch(AuthService.login(params)),
    registerAccount : (username, password, params) => dispatch(AuthService.registerAccount(username, password, params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
