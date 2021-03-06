import React from 'react';
import { connect } from 'react-redux';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1,
    }
});

class Container extends React.PureComponent<> {
   static navigationOptions = (({ navigation, screenProps }) => ({
        headerLeft : (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>back</Text>
            </TouchableOpacity>
        ),
        title : "DRIVER TRIP",
    }));
    render() {
        const { tripId } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text>TO SHOW BOOKING DRICER{tripId}zz</Text>
            </View>
        );
    }
}

const mapStateToProps = store => ({
});
const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
// export default Container;