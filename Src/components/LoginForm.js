import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, StatusBar, TextInput, Button } from 'react-native';
import { connect } from "react-redux";
import { emailChanged } from "../actions"

class LoginForm extends Component {
    emailChange = (text)=>{
        this.props.emailChanged(text);
    }
    render() {
        alert(JSON.stringify(Object.keys(this.props.payload)))
        return (
            <ScrollView style={{ backgroundColor: "pink", flex: 1 }}>
                <StatusBar backgroundColor="purple" />
                <View style={{ backgroundColor: "gray", marginTop: 30 }}>
                    <Text style={{ color: "purple", fontSize: 40, fontWeight: "bold", textAlign: "center" }}> Login </Text>
                    <TextInput placeholder="Email" placeholderTextColor="black" style={{ fontSize: 30, backgroundColor: "white" }} onChangeText={this.emailChange} />
                    <TextInput placeholder="Password" placeholderTextColor="black" secureTextEntry={true} style={{ backgroundColor: "white", fontSize: 30, marginTop: 10 }} onChangeText={this.ChangePassword} />
                    <Button title="Login" onPress={this.login} />
                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => ({
    ...state
  });
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
  });
export default connect(null, emailChanged)(LoginForm);