import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Alert, TouchableOpacity,Image} from "react-native";
  
import axios from "axios";

  const SignUp = ({navigation}) => {
    const handleSubmit = async () => {
      await axios({
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      url: 'http://192.168.0.106:8080/user',
      data: {
            username:username,
            email: email,
            accno:accno,
            balance:balance,
            password: password   
      }
    })
      .then(function (response){
          console.log("response ", JSON.stringify(response.data))
        })
        .catch(function(error){
          console.log("error",error)
          alert(error);
        })
    
}

const navlog=()=>{
  handleSubmit();
  Alert.alert("Signup done Successfully!");
  navigation.navigate("Home",{accno})
}
 

const[username,setusername]=useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("");
const[balance,setbalance]=useState("");
const[accno,setaccno]=useState("");


const validate=()=>{
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    if((username=="")||(email=="")||(password=="")||(accno=="")||(balance=="")){
      alert("Input all fields")
    }
    else if(password.length<8){
      alert("Password should contain more than 8 characters");
    }
    else if(!strongRegex.test(email)){
      alert("Enter proper email");
    }
    
    else if(accno.length!=4){
        alert("Account number should be 4 digit")
    }
    else if(balance<2500){
        alert("Minimum Balance for creating account should be 2500")
    }
    else{
        Alert.alert("Confirm","Are you sure you want to continue?", [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK", onPress: () => navlog() }
          ],
          {cancelable:true})
    }
}

return (
    <View style={styles.main}>
   <View  style={styles.container}>
   <Image style= {styles.image} source={require('../icons/logo1.png')} />
    <View style={styles.login1}>
    <Text style={styles.headertxt}>SignUp</Text>
    </View>
 
     <TextInput onChangeText={(uname)=>setusername(uname)} autoFocus style={styles.emailInput} placeholder='Username'  placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(email)=>setemail(email)} style={styles.emailInput} placeholder='Email'  placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(accno)=>setaccno(accno)} style={styles.emailInput} placeholder='Enter Acc No' placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(balance)=>setbalance(balance)} style={styles.emailInput} placeholder='Enter Initial Balance' placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(pass)=>setpassword(pass)} secureTextEntry={true} style={styles.emailInput}  placeholder='Password' placeholderTextColor='#A3C7D6'></TextInput>
     <View style={{padding:20,paddingBottom:40}}>

     <TouchableOpacity onPress={validate} style={styles.button}>
        <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Create Account</Text>
     </TouchableOpacity>
     
     </View>
     <View>
     </View>   
     
      </View>
  </View>
 )
 }
const styles = StyleSheet.create({
    buttontxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    main:{
        flex:1,    
        backgroundColor:"#F19826",
    },
    headertxt:{
      fontSize: 20,
      margin:15,
      marginBottom:30,
      alignitems:'center',
      color:"black",
      fontWeight: "bold",
    },
    account:{
        marginTop:10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color:"blue",
        textDecorationLine: 'underline',
    },
    login1:{
        
        alignItems: 'center',
        margin:5
        },
    container:{
      marginTop:60,
      height:670,
      flexDirection:"column",
      marginLeft:20,
      alignself:'center',
      backgroundColor:"white",
      margin:10,
      borderWidth:3,
      padding:30,
      borderColor:"#aa292e",
      borderRadius:21,
    },

    checkbox: {
        padding:10,
        flexDirection:"row",
        alignitems: "center",
      },
   
 emailInput: {
  borderColor:"black",
  width: 290,
  height: 50,
  justifyContent:"space-between",
  borderWidth: 2,
  borderRadius: 5,
  padding: 5,
  margin:5,
  marginLeft:10,
 },
 button: {
  backgroundColor: '#aa292e',
  borderRadius: 15,
  marginTop: 25,
  padding: 10,
  alignItems: 'center',
 },

 image:{
  marginTop:-20,
  marginLeft:-20,
  width:180,
   height:50,
   backgroundColor:'#57f6da',
 }
   
   
});
export default SignUp;