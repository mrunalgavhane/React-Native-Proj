import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text,TouchableOpacity,Image} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";

 const Stack = createNativeStackNavigator();
 const Withdraw = ({route}) => {
 
 const{accno}=route.params;
 const [amount, setAmount] = useState("");

 const handleSubmit = async () => {
    await axios({
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: 'http://192.168.0.106:8080/withdraw/'+accno+'/'+amount,
        data: {
          accno:accno,
          amount:amount,    
        }
        })
        .then(function (response){
            console.log("response ", JSON.stringify(response.data))
            alert(response.data)
        })
        .catch(function(error){
        console.log("error",error)
        alert(error);
     })

     await axios({
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
         url: 'http://192.168.0.106:8080/transaction',
         data: {
              accno:accno,
              trn_type:"Withdraw",
              amount:amount,
              acc2:0
                
        }
      })
        .then(function (response){
            console.log("response ", JSON.stringify(response.data))
            alert("Transaction saved")
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
    <Text style={styles.headertxt}>Withdraw</Text>
    </View>


    <Text style={{alignItems:'center',fontSize:17,color:'black',fontWeight:'bold',marginTop:10}}>Account no: {accno}</Text>
    
     
     <TextInput
         onChangeText={(text) => setAmount(text)}
         value={amount}
         style={styles.emailInput}
                  
         placeholder="Enter the amount"
     />  

    

     <TouchableOpacity 
                style ={styles.button1}
                onPress={handleSubmit}>
               <Text style={styles.buttontxt}>Confirm</Text>
     </TouchableOpacity>    
  
     </View>
 
  </View>
)
 }
const styles = StyleSheet.create({
  buttontxt:{
        fontSize:18,
        
    },
    headertxt:{
        marginTop:50,
        fontSize: 20,
        margin:15,
        color:"black",
        fontWeight: "bold",
    },
    account:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,
        color:"blue",
        textDecorationLine: 'underline',
    },
    login1:{
        marginBottom:10,
        alignItems: 'center',
        margin:5
        },

        main:{
            flex:1,    
            backgroundColor:"#F19826",            
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
 emailInput: {
    borderColor:"black",
     width: 310,
     height: 50,
     justifyContent:"space-between",
     borderWidth: 2,
     padding:10,
     margin:10,
     marginLeft:-8,
 },
 button1: {
    backgroundColor: '#aa292e',
  borderRadius: 15,
  marginTop: 25,
  padding: 10,
  alignItems: 'center',
   },   

   image:{
    marginTop:-20,
     marginLeft:-30,
     
     width:180,
     height:50,
     backgroundColor:'#57f6da',
     
 },
});
export default Withdraw;