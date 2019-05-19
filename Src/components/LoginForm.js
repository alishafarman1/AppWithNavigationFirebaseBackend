import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, StatusBar, TextInput, Button } from 'react-native';
import { connect } from "react-redux";
import { emailChanged, passwordChanged, signedIn, signedOut } from "../actions";
import fireBase from 'firebase';

class LoginForm extends Component { 
    emailChange = (text) => this.props.dispatch(emailChanged(text))
    passwordChanged = (text) => this.props.dispatch(passwordChanged(text))
    login = () => {
        fireBase.auth().createUserWithEmailAndPassword(this.props.login.email, this.props.login.password)
            .then(this.successLogin)
            .catch(this.failedLogin)
    };
    successLogin = (successfull) => {
        this.props.dispatch(signedIn())
    }

    failedLogin = (error) => {
        alert(error)
    }

    signout = () => {
        this.props.dispatch(signedOut())
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: "pink", flex: 1 }}>
                <StatusBar backgroundColor="purple" /> 
                {!this.props.login.isLoggedIn ? <View style={{ backgroundColor: "gray", marginTop: 30 }}>
                    <Text style={{ color: "purple", fontSize: 40, fontWeight: "bold", textAlign: "center" }}>Login</Text>
                    <TextInput placeholder="Email" placeholderTextColor="black" style={{ fontSize: 30, backgroundColor: "white" }} onChangeText={this.emailChange} />
                    <TextInput placeholder="Password" placeholderTextColor="black" secureTextEntry={true} style={{ backgroundColor: "white", fontSize: 30, marginTop: 10 }} onChangeText={this.passwordChanged} />
                    <Button title="Login" onPress={this.login} />
                </View>
                :
                <View>
                    <Button title="Sign Out" onPress={this.signout} />
                </View>
                }
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(LoginForm); 