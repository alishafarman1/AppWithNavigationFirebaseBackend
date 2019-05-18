/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from "./reducers"
import LoginForm from './components/LoginForm';


firebase.initializeApp({
  apiKey: "AIzaSyA8xy8-B6Jr3tOTByKgVUu9qNy9-aLm_RQ",
  authDomain: "myredux-96224.firebaseapp.com",
  databaseURL: "https://myredux-96224.firebaseio.com",
  projectId: "myredux-96224",
  storageBucket: "myredux-96224.appspot.com",
  messagingSenderId: "669340526110",
  appId: "1:669340526110:web:a5e444d4a116016b"
})

export default class App extends Component{
  render() {
    return (
      <Provider store = {createStore(reducers)}>
     <LoginForm/>
      </Provider>
    );
  }
}


