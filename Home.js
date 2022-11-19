import React, { Component } from 'react';  
import {Image, Text, Button, StyleSheet, View,TouchableOpacity } from 'react-native';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";

const Stack = createNativeStackNavigator();
  
  const Home = ({route,navigation}) => {

       const{accno}=route.params;

       const handleSubmit = async () => {
        await axios({ 
                 method: 'GET',
                 url: 'http://192.168.0.106:8080/viewbalance/'+accno,
                 })
        .then(function (response){
                console.log("response",JSON.stringify(response.data))
                alert("Current Balance:"+JSON.stringify(response.data.balance))
             })
        .catch(function(error){
                console.log("error",error)
                alert(error);
            })
        }

          return (  
            <View style={styles.main}>
            <View style={styles.container}>  
            <Image style= {styles.image} source={require('../icons/logo1.png')} />
            <View style={styles.usertxt}>
                       
            <Text style={{alignItems:'center',fontSize:17,color:'black',fontWeight:'bold'}}>Welcome</Text>  
            <Text style={{alignItems:'center',fontSize:17,color:'black',fontWeight:'bold'}}>Account no: {accno}</Text>  
            
            </View>

           
                <View>  

                <TouchableOpacity onPress={() => navigation.navigate('Transfer',{accno})}  style={styles.button}>
                 <Text style={{alignItems:'center',fontSize:17,color:'white',fontWeight:'bold'}}>Transfer Amount</Text>
                    </TouchableOpacity>
                    
                </View> 


                {<View>  

                <TouchableOpacity onPress={() => navigation.navigate('Statement',{accno})}  style={styles.button}>
                 <Text style={{alignItems:'center',fontSize:17,color:'white',fontWeight:'bold'}}>View Statement</Text>
                    </TouchableOpacity>
                    
                </View>  
                
                }
                
                <View>

                <TouchableOpacity onPress={() => navigation.navigate('Deposit',{accno})}  style={styles.button}>
                 <Text style={{alignItems:'center',fontSize:17,color:'white',fontWeight:'bold'}}>Deposit</Text>
                    </TouchableOpacity>
                    
                </View> 

                <View>
                <TouchableOpacity onPress={() => navigation.navigate('Withdraw',{accno})}  style={styles.button}>
                 <Text style={{alignItems:'center',fontSize:17,color:'white',fontWeight:'bold'}}>Withdraw</Text>
                    </TouchableOpacity>
                    
                </View> 

                <View>
                <TouchableOpacity onPress={handleSubmit}   style={styles.button}>
                 <Text style={{alignItems:'center',fontSize:17,color:'white',fontWeight:'bold'}}>View Balance</Text>
                    </TouchableOpacity>
                    
                </View> 
                 


                
            </View>
            </View>  
        );  
    }  

const styles = StyleSheet.create({ 
    usertxt:{
        marginTop:30,
        marginLeft:20,
        marginBottom:10,
        fontWeight:'Bold',
    },
    main:{
        flex:1,    
        backgroundColor:"#F19826",
    }, 
    image:{
        marginTop:-20,
        marginLeft:-20,
        width:180,
         height:50,
         backgroundColor:'#57f6da',
         
     },
    container: {
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
    buttonContainer: {  
        flexDirection:"column",
        backgroundColor: '#009933',
        borderRadius: 15,
        marginTop: 25,
        padding: 10,
        alignItems: 'center', 
    },  

    button: {
        backgroundColor: '#aa292e',
        borderRadius: 15,
        marginTop: 25,
        padding: 10,
        alignItems: 'center',
       },
   
})  

export default Home;