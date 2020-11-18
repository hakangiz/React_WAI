import React, { Component } from 'react'
import {  
  StyleSheet,
  Image,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Dimensions,
  Button,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'
import appIcon from './src/img/point-objects.png'
import bgImage from './src/img/perspective.png'  
import { Utils }  from './src/helper/helper'
import { getWindowWidth } from './src/helper/Utils'


export default class LoginPage extends Component {
  state = {
    checked: false,
  };
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.viewcontainer}>
        <Image source={appIcon} style={styles.appIcon}></Image>
          <View style={styles.viewLoginHeader}>
            <Text style={styles.txtLoginHeader1}>Welcome back,</Text>
            <Text style={styles.txtLoginHeader2}>sign in to continue</Text>
          </View>
          <View style={styles.txtContainer}>
            <View style={styles.txtInContainer}>
              <View style={styles.txtInContainerHeader}>
                <Icon name="user-circle-o" type="font-awesome" color="#6fa3f7" style={styles.txtIcon}></Icon>
                <Text style={styles.txtHeader}>User name</Text>
              </View>
              <TextInput placeholder="enter your username" style={styles.txtInput}></TextInput>
            </View>
            <View style={styles.txtInContainer}>
            <View style={styles.txtInContainerHeader}>
              <Icon name="lock" type="font-awesome" color="#6fa3f7" style={styles.txtIcon}></Icon>
              <Text style={styles.txtHeader}>Password</Text>
              </View>
              <TextInput placeholder="enter your password" style={styles.txtInput}></TextInput>
            </View>
          </View>
          <View style={styles.rememberMeForgetContainer}>
           <CheckBox 
              title={<Text style={styles.rememberMe} >Remember Me</Text>}
              containerStyle={styles.rememberMeContainer}
              checked={this.state.checked} 
              onPress={()=>this.setState({ checked: !this.state.checked })}
              size={15} />
            <TouchableOpacity><Text style={styles.forgotPassword}>Forgot Password</Text></TouchableOpacity>  
          </View>
          <View>
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.createAccountHeader}>Don't have an account yet?</Text>
            <TouchableOpacity style={styles.createAccountButton}>
              <Text style={styles.createAccountText}> Create Account </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.emptyView}></View> */}
        </View>
      </ImageBackground>
    )
  }
}

//Css dosyalarını başka bir js dosyasından import et
const styles=StyleSheet.create({
appIcon:{
  width:Utils.getWindowWidth()*0.20,
  height:Utils.getWindowWidth()*0.20,
  top:Utils.getWindowWidth()*0.10*-1,
  marginLeft:(Utils.getWindowWidth()*0.50)-(Utils.getWindowWidth()*0.20),
},
backgroundContainer:{
  flex:1,
  width:null,
  height:null,
  justifyContent:"center",
  alignItems:"center",
},
viewcontainer:{
  //alignItems:"center",
  //justifyContent:"center",
  //paddingTop:Utils.getWindowHeight() * 0.25,
  //height:Utils.getWindowHeight() * 0.60,
  width:Utils.getWindowWidth()*0.90,
  //backgroundColor:"rgba(0,0,0,.1)",
},
txtLoginHeader1:{
fontSize:25
},
txtLoginHeader2:{
color:'#4d4d4d',
fontSize:12,
marginBottom:10
},
viewHeader:{
  flex:2,
  flexDirection:'row',
  backgroundColor:"rgba(0,0,0,.1)",
  //height:30,
  //width:50
  //margin:20,
  //paddingRight:Utils.getWindowWidth()*0.20,
  //width:Utils.getWindowWidth()*0.60
},
txtContainer:{
justifyContent:"space-between",
paddingTop:10,
//paddingBottom:10,
//backgroundColor:"rgba(0,0,0,.1)",
},
txtInContainer:{
flexDirection:"column",
borderWidth:0.5,
marginBottom:10,
borderRadius:2,
borderColor:"#a6a6a6"
},
txtInContainerHeader:{
  flexDirection:"row",
  maxHeight:30,
},
txtIcon:{
  paddingTop:5,
  paddingRight:10,
  paddingBottom:5,
  paddingLeft:10,
  //backgroundColor:"rgba(0,0,0,.1)",
},
txtHeader:{
  fontSize:10,
  color:'#4d4d4d',
  marginTop:3,
  maxHeight:20,
  //backgroundColor:"rgba(0,0,0,.1)",
},
txtInput:{
  fontSize:8,
  //backgroundColor:"rgba(0,0,0,.1)",
  maxHeight:30,
  paddingLeft:30,
},
rememberMeForgetContainer:{
flexDirection:"row",
justifyContent:'space-between',
paddingBottom:10,
//backgroundColor:"rgba(0,0,0,.1)",
},
rememberMe:{
  fontSize:10,
  color:'#4d4d4d',
},
rememberMeContainer:{
  width:getWindowWidth()*0.30,
  padding:5,
  margin:0,
  left:-10,
  borderWidth:0,
  backgroundColor:'transparent',
  //backgroundColor:"rgba(0,0,0,.1)",
},
forgotPassword:{
  fontSize:9,
  color:'#6fa3f7',
  //backgroundColor:"rgba(0,0,0,.1)",
},
emptyView:{
  height:50
},
signInButton: {
  alignItems: 'center',
  backgroundColor: '#2196F3',
  padding: 10,
  textTransform: 'lowercase', 
  borderRadius:2,
  marginTop:5,
},
signInText:{
  color:'white'
},
createAccountHeader:{
  marginTop:15,
  fontSize:9,
  color:'#4d4d4d',
  marginBottom:5,
},
createAccountButton:{
  alignItems: 'center',
  backgroundColor: 'white',
  padding: 10,
  textTransform: 'lowercase', 
  borderRadius:2,
  borderWidth:1,
  borderColor:'#5cb7ff',
},
createAccountText:{
  color:'#2196F3',
},

})
