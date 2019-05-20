import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from "./reducers" 
import ReduxThunk from 'redux-thunk';
import Router from './Router';  

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
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}


