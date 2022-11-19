import React, { useState } from "react";
import { Image, View, TextInput, StyleSheet, Text, TouchableOpacity} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";

const Stack = createNativeStackNavigator();
const Login = ({navigation}) => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [accno,setAccno]= useState(""); 
const handleSubmit = async () => {
    await axios({ 
             method: 'GET',
             url: 'http://192.168.0.106:8080/users/'+accno,
             })
         .then(function (response){
            console.log("response",JSON.stringify(response.data))
            if(username==response.data.username && password==response.data.password){
                alert("Login Successful")
                navigation.navigate("Home",{accno})
            }
            else{
                alert("Incorrect Credentials")
            }
         })
    .catch(function(error){
            console.log("error",error)
            alert(error);
        })
    }
     
 return (
  <View style={styles.main}>
    
   <View  style={styles.container}>
   <Image style= {styles.image} source={require('../icons/logo1.png')} />
    <View style={styles.login1}>

    <Text style={styles.headertxt}>Login Page</Text>
    </View>

    <TextInput 
         onChangeText={(text) => setAccno(text)}
         value={accno}
         style={styles.emailInput}
         placeholder="Enter your Account no"
     />
       
     <TextInput 
         onChangeText={(text) => setUsername(text)}
         value={username}
         style={styles.emailInput}
         placeholder="Enter your username"
     />
     <TextInput
         onChangeText={(text) => setPassword(text)}
         value={password}
         style={styles.emailInput}
         secureTextEntry={true}         
         placeholder="Enter your password"
     />  

     <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Login</Text>
     </TouchableOpacity>

     <Text style={styles.account} onPress={() =>
        navigation.navigate('Signup', { name: 'Jane' })
      }>Create an account?</Text>

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
        marginTop:12,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color:"black",
        textDecorationLine: 'underline',
    },
    image:{
       marginTop:-20,
        marginLeft:-30,
        marginBottom:20,
        width:180,
        height:50,
        backgroundColor:'#57f6da',
        
    },
    login1:{
        marginTop:15,
        alignItems: 'center',
        
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
        marginTop:10,
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
});
export default Login;