import React, { Component } from 'react'
import {View,TextInput,KeyboardAvoidingView, TouchableOpacity,StyleSheet,Alert,Text} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import {Header} from 'react-native-elements'
export default class SignUpLoginScreen extends Component{
    constructor(props){
        super(props)
        this.state={
          email : "",
          password : ""
        }
      }
      userLogin = (email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
          return Alert.alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }

         userSignUp = (email,password) =>{
             firebase.auth().createUserWithEmailAndPassword(email,password)
             .then((response)=>{
                 return Alert.alert("User Added Successfully")
             })
             .catch(function(error){
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 return Alert.alert(errorMessage)
             });
         }
      
    render(){
        return(
            <KeyboardAvoidingView>
                <View style={styles.container}>
                <Header
                backgroundColor={'#0000FF'}
                centerComponent={{
                  text: 'Barter System',
                  style: { color: '#00FF00', fontSize: 30, fontFamily:'Felix Titling' },
                }}
                />
             <TextInput
            style={styles.loginBox}
            keyboardType ='email-address'
            placeholder="Type Your Email Here...."
            onChangeText={(text)=>{
              this.setState({
                email: text
              })
            }}
            value={this.state.email}
            />

<TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              placeholder="Type Password Here...."
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
              value={this.state.password}
            />

          <TouchableOpacity 
          style = {styles.loginSignUpButton}
              onPress = {()=>{this.userLogin(this.state.email, this.state.password)}}
              >
            <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'LuzSans-Book',alignSelf:'center'}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.loginSignUpButton}
          onPress={()=>{this.userSignUp(this.state.email, this.state.password)}}
           >
            <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'LuzSans-Book',alignSelf:'center'}}>Sign Up</Text>
          </TouchableOpacity>
          </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    loginBox: {
        width: 200,
        height: 50,
        borderRadius: 5,
        backgroundColor:'#0000ff',
        alignSelf:'center'
    },
    
    loginSignUpButton: {
        width: 150,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#800080',
        alignSelf:'center',
        flex:1
    },
    container: {
        backgroundColor:'#FFA500',
        width:'100%',
        height:'100%',
        flex:1
    }
});