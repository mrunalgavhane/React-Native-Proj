import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, Alert, TouchableOpacity,Image,FlatList} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import axios from "axios";

const Stack = createNativeStackNavigator();
const Statement = ({route}) => {
    const {accno}=route.params;

    let myarr=[];
   const getstatement=()=>{
    axios.get(`http://192.168.0.106:8080/history/`+accno)
    .then((response)=> {
           
            setstatement(response.data);
            console.log(statement);
        },
  
    (error)=>{
        console.log(error)
    }
    );
   }

   useEffect(() => {
     getstatement();
   
     
   }, [])
   
  const [statement, setstatement] = useState([]);
 
  return (
    <View style={styles.main}>
    <View style={styles.container}>
     <Image style= {styles.image} source={require('../icons/logo1.png')} />
     <View style={styles.login1}>
    <Text style={styles.headertxt}>Account Statement</Text>
    <Text style={{alignItems:'center',fontSize:17,color:'black',fontWeight:'bold',marginTop:10}}>Account no: {accno}</Text>
    </View >
    <View style={styles.container1}>
   {/* <Text>{listItems}</Text> */}
   <View style={{flex:1,paddingHorizontal:3,backgroundColor:'#E6E1E1'}}>
    <View style={{flexDirection:'row',paddingHorizontal:3}}>
        <Text style={styles.table}>Sender</Text>
        <Text style={styles.table}>Receiver</Text>
        <Text style={styles.table}>Type</Text>
        <Text style={styles.table}>Amount</Text>
    </View>
   <FlatList data={statement} renderItem={(e)=>{
    return<View style={{flex:1,flexDirection:'row',paddingHorizontal:3,backgroundColor:'#E6E1E1'}}>
       <Text style={styles.table}>{e.item.accno}</Text>
       <Text style={styles.table}>{e.item.acc2}</Text>
       <Text style={styles.table}>{e.item.trn_type}</Text>
       <Text style={styles.table}>{e.item.amount}</Text>
    </View>
    // return <Text style={{color:'white',fontSize:20}}>Account Number 1: {e.item.accNo1}  {"\n"} Account Number 2: {e.item.accNo2}  {"\n"} Transaction Type: {e.item.trnstype}  {"\n"} Amount: {e.item.amount} {"\n"}</Text>
   }}></FlatList>
    {/* <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Home")}>
        <Text style={{color:'black',fontSize:15}}>Back to Home</Text>
      </TouchableOpacity> */}
      </View>
    </View >
    </View>
    </View>
  )
 }
 const styles = StyleSheet.create({
    header:{
        fontSize:35,
        fontFamily:'notoserif',
        color:'white',
       
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
    login1:{
        marginBottom:10,
        alignItems: 'center',
        margin:5
        },
        headertxt:{
            marginTop:50,
            fontSize: 20,
            margin:15,
            color:"black",
            fontWeight: "bold",
        },
    
    input:{
        color:'#A3C7D6',
      margin:15,
      borderRadius:7,
      padding:10,
      height:60,
      width:290 ,
      borderWidth:2,
      borderColor:'#A3C7D6',
      justifyContent:"space-between",
    },
    main:{
           
        backgroundColor:"#F19826",            
    },
    container1: {
    paddingTop:10,
    // paddingLeft:10,
    // paddingRight:10,
      flex:0.8,
      backgroundColor: '#aa292e',
      alignItems: 'center',
      borderColor:"#aa292e",
    //   justifyContent: 'space-evenly',
    //   borderWidth:2,
      borderRadius:17,
      backgroundColor:'#E6E1E1',
      width:300
    },
    btn:{
        height:45,
        width:100,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'white',
        borderColor:'#A3C7D6',
        
    },
    image:{
        marginTop:-20,
         marginLeft:-30,
         width:180,
         height:50,
         backgroundColor:'#57f6da',
         
     },
    table:{
        borderWidth:1,  width:80,height:30, paddingLeft:12, paddingTop:5, backgroundColor:'#9e3239',color:'white',fontSize:15 
    }
});
export default Statement;