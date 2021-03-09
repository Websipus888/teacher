import React, {Component} from 'react';

import { Button, View, Text } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';


export  class DetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
              title="Go to Details... again"
              onPress={() => navigation.push('Details')}
            />
            <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => this.props.navigation.goBack()} />

            
          </View>

          
      
        )
    }
}

export default DetailScreen;
