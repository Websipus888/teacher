import React, {Component} from 'react';

import {
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import firebase from '../database/firebaseDb';

export class Login extends Component {
  // set default
  constructor() {
    super();
    //declare the place of database
    this.dbRef = firebase.firestore().collection('addreact');
    //create state 
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  // add to firestore
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  // add to database
  // very important part to process backend system
  storeUser() {
    if (this.state.email == '') {
      alert('Fills your email !');
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef.add({
        email: this.state.email,
        password: this.state.password,
      }).then((res) =>{
        this.setState({
          email: '',
          password:'',
          isLoading:false,
        })
        this.props.navigation.navigate('RealLogin') 
      })
      .catch((err)=>{
        console.log('Error found:',err)
        this.setState({
          isLoading:false
        })
      })
    }
  }
  render() {
    //a part of operation on UI
    if(this.state.isLoading){
      return(
        <View>
          <ActivityIndicator size='large' color='#9e9e9e'/>
        </View>
      )
    }
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
        }}>
        <View
          style={{
            position: 'absolute',
            marginLeft: wp('20%'),
            marginTop: hp('10%'),
          }}>
          <TextInput
            placeholder="Email"
            value={this.state.email}//รับค่ามาจากด้านบน
            onChangeText={(val)=>this.inputValueUpdate(val,'email')} //เพิ่ม event for กล่องกรอกข้อมูล
            style={{
              flexDirection: 'column',
              backgroundColor: '#fdeb93',
              paddingHorizontal: wp('5%'), // ตำแหน่ง cursor
              paddingVertical: 25,
              marginHorizontal: wp('-65%'),
              marginLeft: wp('-5%'),

              //    maxLength: 20,
              borderRadius: 5,
            }}></TextInput>
          <View
            style={{
              position: 'absolute',
              marginTop: hp('10%'),
            }}>
            <TextInput
              placeholder="Password"
              value={this.state.password}//รับค่ามาจากด้านบน
            onChangeText={(val)=>this.inputValueUpdate(val,'password')} //เพิ่ม event
              style={{
                flexDirection: 'column',
                backgroundColor: '#fdeb93',
                paddingHorizontal: wp('5%'), // ตำแหน่ง cursor
                paddingVertical: 25,
                marginHorizontal: wp('-65%'),
                marginLeft: wp('-5%'),

                //    maxLength: 20,
                borderRadius: 5,
              }}></TextInput>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            marginLeft: wp('20%'),
            marginTop: hp('50%'),
          }}>
          <TouchableHighlight
            onPress={()=>this.storeUser()}
            style={{
              flexDirection: 'column',
              backgroundColor: '#FE9A08',
              paddingHorizontal: wp('5%'), // ตำแหน่ง cursor
              paddingVertical: 25,
              marginHorizontal: wp('-65%'),
              marginLeft: wp('-5%'),

              //    maxLength: 20,
              borderRadius: 5,
            }}>
            <Text style={{textAlign: 'center', color: '#FFFFFF'}}>Add</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
