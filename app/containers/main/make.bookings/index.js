import React from 'react';
import { View, Text } from 'react-native';
import Steps from './make.bookings.step';

class Container extends React.PureComponent<> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>IN CONTAINER</Text>
                <Steps />
            </View>
        );
    }
}

export default Container;