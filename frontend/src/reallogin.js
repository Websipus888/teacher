import React, {Component} from 'react';

import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Button,
  View,
  Text,
} from 'react-native';
import firebase from '../database/firebaseDb';

export class RealLogin extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <ScrollView>
            <View>
                <Text>Hello From ADD DATA</Text>
            </View>
        </ScrollView>
    );
  }
}

export default RealLogin;
