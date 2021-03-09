import React, {Component} from 'react';

import {Button, View, Text, Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import Icon from 'react-native-vector-icons/FontAwesome';

import Onboarding from 'react-native-onboarding-swiper';

export class HomeScreen extends Component {
  render() {
    return (
      <Onboarding
    
      onSkip={() => this.props.navigation.navigate("Login")} //replace use for auth (asyncho)
      onDone={() => this.props.navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#fdeb93',
            image: (
              <Image
                source={require('../assets/chat.png')}
                style={{width: 200, height: 200}}
              />
            ),
            title: 'Welcome to Buddy',
            subtitle: 'we are the best for customer',
          },
          {
            backgroundColor: '#fdeb93',
            image: (
              <Image
                source={require('../assets/online.png')}
                style={{width: 200, height: 200}}
              />
            ),
            title: 'Rider and Shopper ',
            subtitle: 'select what you want in both mode',
          },
          {
            backgroundColor: '#fdeb93',
            image: (
              <Image
                source={require('../assets/marketing.png')}
                style={{width: 200, height: 200}}
              />
            ),
            title: 'Try for free',
            subtitle: 'let start with us together',
          },
        ]}
      />
      // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      //   <Text>Onboarding Screen</Text>
      //   <Button
      //     title="Go to Details"
      //     onPress={() => this.props.navigation.navigate('Details')}
      //   />

      //   {/* <Icon.Button name="menu" size={25} backgroundColor='#FE9A08'
      //      ></Icon.Button> */}

      // </View>
    );
  }
}

export default HomeScreen;
