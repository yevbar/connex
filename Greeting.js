import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
                <Text>Hello { this.props.name }!</Text>
        );
    }
}

export default class LotsOfGreeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
            <Greeting name="Yev" />
            <Greeting name="Somebody else"/>
            <Greeting name="And yet somebody else"/>
            </View>
        );
    }
}
